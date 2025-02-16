// create interface-instances of the model based on XML-URDF file.
// These interface is closer to the Three.js-structure so its easy

import type IUrdfVisual from "./models/IUrdfVisual";

import { xyzFromString, rpyFromString, rgbaFromString } from "./helper";
import type IUrdfLink from "./models/IUrdfLink";
import type IUrdfJoint from "./models/IUrdfJoint";
import type IUrdfMesh from "./models/IUrdfMesh";
import type IUrdfCylinder from "./models/IUrdfCylinder";
import type IUrdfBox from "./models/IUrdfBox";
import type IUrdfRobot from "./models/IUrdfRobot";

export function getRootJoints(robot:IUrdfRobot): IUrdfJoint[] {
  // get the root joint(s)
  const joints = robot.joints;
  const rootJoints: IUrdfJoint[] = [];
  for (const joint of joints) {
    let isRoot = true;
    // go through all joints again and check if they have a child that
    // match this joint, if not the current joint does not have a parent
    // and is a root joint.
    for (const parentJoint of joints) {
      if (joint.parent.name === parentJoint.child.name) {
        isRoot = false
        break
      }
    }
    if (isRoot) {
      // add current root to root joint-list
      rootJoints.push(joint);
    }
  }
  return rootJoints
}

export function getChildJoints(
  robot: IUrdfRobot, parent: IUrdfLink): IUrdfJoint[] {
  const childJoints: IUrdfJoint[] = []
  const joints = robot.joints;
  if (!joints) {
    return []
  }
  for (const joint of joints) {
    if (joint.parent.name == parent.name) {
      childJoints.push(joint);
    }
  }
  return childJoints
}

export function updateJoint(joint: IUrdfJoint) {
  const origin = joint.elem.getElementsByTagName('origin')[0];
  origin.setAttribute('xyz', joint.origin_xyz.join(' '))
  origin.setAttribute('rpy', joint.origin_rpy.join(' '))
}

// render the 3D-model from this.
export class UrdfParser {
  // filename of xml to load
  filename: string;

  // loaded colors from root materials
  colors: { [name: string]: [r: number, g: number, b: number, a: number] } = {}

  robot: IUrdfRobot = {
    name: '',
    links: {},
    joints: []
  }

  // folder where the model-meshes are stored 
  prefix: string = '';

  // the DOM element holding the XML, so we can work non-destructive
  xmlRobotNode: Element | undefined;

  constructor(filename: string, prefix:string = '') {
    this.filename = filename;
    this.prefix = prefix;
  }

  async load() {
    return fetch(this.filename).then((response) => {
      return response.text();
    })
  }

  reset() {
    this.robot = {
      name: '',
      links: {},
      joints: []
    }
  }

  fromString(data: string): IUrdfRobot {
    this.reset();
    let domElem = new window.DOMParser().parseFromString(data, "text/xml")
    this.xmlRobotNode = domElem.documentElement;
    return this.parseRobotXMLNode(domElem.documentElement)
  }

  parseRobotXMLNode(robotNode: Element): IUrdfRobot {
    // beginning - parse top-level <robot> tag
    const rootNodeName = robotNode.nodeName;
    if (rootNodeName !== 'robot') {
      throw new Error(`Invalid URDF: no root node ${rootNodeName}`)
    }
    this.robot.name = robotNode.getAttribute("name") as string
    // fill colors object
    this.parseColorsFromRobot(robotNode);
    this.parseLinks(robotNode);
    this.parseJoints(robotNode);
    return this.robot;
  }

  parseColorsFromRobot(robotNode: Element) {
    // get a list of globally known colors from the root element
    const xmlMaterials = robotNode.getElementsByTagName('material');
    for (let i = 0; i < xmlMaterials.length; i++) {
      const xmlMaterial = xmlMaterials[i];
      const cm = this.colorFromMaterial(xmlMaterial)
      if (cm) {
        this.colors[cm.name] = cm.rgba;
      }
    }
  }

  colorFromMaterial(xmlMaterial: Element):
      { name: string, rgba: [r: number, g: number, b: number, a: number] } | undefined {
    // material isn't name
    if (!xmlMaterial.hasAttribute('name')) {
      console.warn(
        'Found material-tag with name without name inside robot tag!');
      return;
    }
    const colorName = xmlMaterial.getAttribute('name') as string;
    const xmlColors = xmlMaterial.getElementsByTagName('color')
    // material without color sub-element.
    if (xmlColors.length === 0) {
      return
    }
    const xmlColor = xmlColors[0];
    // no color value
    if (!xmlColor.hasAttribute('rgba')) {
      console.warn(
        `Color tag ${colorName} does not have expected "rgba" attribute!`);
      return;
    }
    return {
      name: colorName,
      rgba: rgbaFromString(xmlColor) || [0, 0, 0, 1]
    }
  }

  getLinkByName(name: string): Element | undefined {
    if (!this.xmlRobotNode) {
      return undefined;
    }
    const xmlLinks = this.xmlRobotNode.getElementsByTagName('link');
    for (let i = 0; i < xmlLinks.length; i++) {
      const linkXmlNode = xmlLinks[i];
      if (linkXmlNode.hasAttribute('name')) {
        const _name = linkXmlNode.getAttribute('name') as string;
        if (name == _name) {
          return linkXmlNode;
        }
      }
    }
    return undefined;
  }

  parseLinks(robotNode: Element) {
    const xmlLinks = robotNode.getElementsByTagName('link');
    for (let i = 0; i < xmlLinks.length; i++) {
      const linkXmlNode = xmlLinks[i];
      const visualXmlNodes = linkXmlNode.getElementsByTagName('visual');

      const link = {visual: [] as IUrdfVisual[]} as IUrdfLink;
      if (linkXmlNode.hasAttribute('name')) {
        link.name = linkXmlNode.getAttribute('name') as string;
        this.robot.links[link.name] = link;
      }
      for (let j = 0; j < visualXmlNodes.length; j++) {
        link.visual.push(this.parseVisual(visualXmlNodes[j]));
      }
    }
  }

  parseVisual(node: Element): IUrdfVisual {
    // parse visual tag
    let origin_xyz: [x: number, y: number, z: number] | undefined;
    let origin_rpy: [roll: number, pitch: number, yaw: number] | undefined;
    let color: HTMLCollectionOf<Element>;
    let colorName: string = 'pink';

    const visual = { elem: node } as IUrdfVisual
    for (let i = 0; i < node.childNodes.length; i++) {
      const child = node.childNodes[i] as Element;
      switch (child.nodeName) {
        case 'geometry':
          this.parseGeometry(child, visual)
          break
        case 'origin':
          origin_xyz = xyzFromString(child);
          if (origin_xyz) {
            visual.origin_xyz = origin_xyz
          }
          origin_rpy = rpyFromString(child);
          if (origin_rpy) {
            visual.origin_rpy = origin_rpy
          }
          // visual.origin_rpy
          break
        case 'material':
          color = child.getElementsByTagName('color')
          if (color.length > 0 && color[0].hasAttribute('rgba')) {
            visual.color_rgba = rgbaFromString(color[0])
          } else if (child.hasAttribute('name')) {
            colorName = child.getAttribute('name') as string
            visual.color_rgba = this.colors[colorName]
          }
      }
    }
    return visual;
  }

  parseGeometry(node: ChildNode, visual: IUrdfVisual) {
    // parse geometry-tag
    for (let i = 0; i < node.childNodes.length; i++) {
      const child = node.childNodes[i] as Element;
      switch (child.nodeName) {
        case 'mesh':
          // parse scale
          let scale = [1.0, 1.0, 1.0];
          let scaleAttr = child.getAttribute('scale');
          if (scaleAttr) {
            const scales = scaleAttr.split(' ')
            for (const i in scales) {
              scale[i] = parseFloat(scales[i]);
            }
          }
          // parse file type
          let filename = child.getAttribute('filename') as string
          filename = filename.replace('package:/', this.prefix);
          let type = 'stl';
          switch (filename.substring(filename.length - 3).toLocaleLowerCase()) {
            case 'fbx':
              type = 'fbx'
              break
            case 'obj':
              type = 'obj'
              break
            case 'stl':
              type = 'stl'
              break
            case 'dae':
              type = 'dae'
              break;
            default:
              throw new Error('Unknown type ' + filename)
          }
          visual.geometry = {
            filename: filename,
            type: type,
            scale: scale
          } as IUrdfMesh;
          visual.type = 'mesh';
          return;
        case 'cylinder':
          const cylinderGeom = {} as IUrdfCylinder
          if (child.hasAttribute('length')) {
            cylinderGeom.length = parseFloat(
              child.getAttribute('length') as string)
          }
          if (child.hasAttribute('radius')) {
            cylinderGeom.radius = parseFloat(
              child.getAttribute('radius') as string)
          }
          visual.geometry = cylinderGeom;
          visual.type = 'cylinder';
          return
        case 'box':
          const boxGeom = { size: [1.0, 1.0, 1.0] } as IUrdfBox
          if (child.hasAttribute('size')) {
            const xmlSize = child.getAttribute('size') as string
            const sizes = xmlSize.split(' ')
            for (const i in sizes) {
              boxGeom.size[i] = parseFloat(sizes[i]);
            }
          }
          visual.geometry = boxGeom;
          return;
      }
    }
    return;
  }

  parseJoints(robotNode: Element) {
    const links = this.robot.links;
    const joints = this.robot.joints;
    // parse all joints
    const xmlJoints = robotNode.getElementsByTagName('joint');
    for (let i = 0; i < xmlJoints.length; i++) {
      const jointXmlNode = xmlJoints[i];
      
      const originXml = jointXmlNode.getElementsByTagName('origin');
      let rpy: [roll: number, pitch: number, yaw: number] = [0, 0, 0]
      let xyz: [x: number, y: number, z: number] = [0, 0, 0]
      if (originXml.length === 1) {
        let origin_xyz = xyzFromString(originXml[0]);
        if (origin_xyz) {
          xyz = origin_xyz
        }
        let origin_rpy = rpyFromString(originXml[0]);
        if (origin_rpy) {
          rpy = origin_rpy
        }
      }
      let parent
      const parentXmlTag = jointXmlNode.getElementsByTagName('parent');
      if (parentXmlTag.length === 1) {
        const parentName = parentXmlTag[0].getAttribute('link');
        if (!parentName) {
          throw Error('Name not set for link');
        }
        const parentXml = this.getLinkByName(parentName);
        if (!parentXml) {
          throw Error(`Link with name ${parentName} not found!`);
        }
        if (parentName && links[parentName]) {
          parent = links[parentName];
        } else {
          parent = {
            name: parentName,
            visual: [],
            elem: parentXml,
            highlight: false
          } as IUrdfLink
        }
      }
      let child
      const childXml = jointXmlNode.getElementsByTagName('child');
      if (childXml.length === 1) {
        const childName = childXml[0].getAttribute('link')
        if (childName && links[childName]) {
          child = links[childName];
        } else if (childName) {
          const elem = this.getLinkByName(childName);
          child = {
            name: childName,
            visual: [],
            elem,
            highlight: false
          } as IUrdfLink
        }
      }
      let limit = undefined;
      let axis_xyz: [x: number, y: number, z: number] = [0, 0, 1];

      const axisXml = jointXmlNode.getElementsByTagName('axis');
      if (axisXml.length === 1) {
        axis_xyz = xyzFromString(axisXml[0]) || axis_xyz;
      }

      const limitXml = jointXmlNode.getElementsByTagName('limit');
      if (limitXml.length === 1) {
        limit = {lower: 0, upper: 0, effort: 0, velocity: 0}
        const lowerStr = limitXml[0].getAttribute('lower')
        if (lowerStr) {
          limit.lower = parseInt(lowerStr);
        }
        const upperStr = limitXml[0].getAttribute('upper')
        if (upperStr) {
          limit.upper = parseInt(upperStr);
        }
        const effortStr = limitXml[0].getAttribute('effort')
        if (effortStr) {
          limit.effort = parseInt(effortStr);
        }
        const velocityStr = limitXml[0].getAttribute('velocity')
        if (velocityStr) {
          limit.velocity = parseInt(velocityStr);
        }
      }

      if (child && parent) {
        joints.push({
          name: jointXmlNode.getAttribute('name') || undefined,
          type: jointXmlNode.getAttribute('type') || undefined,
          origin_rpy: rpy,
          origin_xyz: xyz,
          rotation: Object.assign([], rpy),
          axis_xyz: axis_xyz,
          parent: parent,
          child: child,
          limit: limit,
          elem: jointXmlNode
        });
      }
    }
  }

  /** create XML-string from URDF-description */
  getURDFXML(): string {
    const xmldef = '<?xml version="1.0" ?>\n';
    return this.xmlRobotNode ? xmldef + this.xmlRobotNode.outerHTML : '';
  }
}