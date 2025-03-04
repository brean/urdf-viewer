import type IUrdfBox from "./IUrdfBox";
import type IUrdfCylinder from "./IUrdfCylinder";
import type IUrdfMesh from "./IUrdfMesh";

export default interface IUrdfVisual {
  origin_xyz: [x: number, y: number, z: number]
  origin_rpy: [roll: number, pitch: number, yaw: number]
  geometry: IUrdfBox | IUrdfCylinder | IUrdfMesh;
  type: 'box' | 'cylinder' | 'mesh'
  // material color
  color_rgba?: [r: number, g: number, b: number, a: number];
  // XML Element
  elem: Element;
  rotation: [x: number, y: number, z: number]
}