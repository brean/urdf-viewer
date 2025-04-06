import type IUrdfJoint from "$lib/models/IUrdfJoint"
import type IUrdfLink from "$lib/models/IUrdfLink"
import type IUrdfRobot from "$lib/models/IUrdfRobot"


export const urdf_viewer_state = $state<{
    selectedLink?: IUrdfLink
    selectedJoint?: IUrdfJoint
    robot?: IUrdfRobot
    edit: boolean // add TransformControls when we can edit the element
    continuousJoints: {[name: string]: number}
    revoluteJoints: {[name: string]: number}
    tool?: "translate" | "rotate" | "scale"
    visual: boolean
    collision: boolean
    collisionColor: string
    joints: boolean
    jointNames: boolean
    linkNames: boolean
    highlightColor: string
    visualOpacity: number
    linkColor: string
    jointColor: string
    jointIndicatorColor: string
    linkOpacity: number
    collisionOpacity: number
    backgroundColor: string
    translationSnap: number
    scaleSnap: number
    rotationSnap: number
    initialZoom: number
    zoom: number
    nameHeight: number
}>({
    edit: false,
    tool: 'translate',
    selectedLink: undefined,
    selectedJoint: undefined,
    robot: undefined,
    continuousJoints: {},
    revoluteJoints: {},
    visual: true,
    collision: false,
    collisionColor: "#813d9c", // purple
    joints: true,
    jointNames: true,
    jointColor: "#62a0ea", // blue
    linkNames: true,
    linkColor: "#57e389", // green
    jointIndicatorColor: "#f66151", // red
    linkOpacity: 1.0,
    highlightColor: "#ffa348", // orange
    visualOpacity: 1.0,
    collisionOpacity: 0.7,
    backgroundColor: "#241f31", // dark purple
    translationSnap: 0.001,
    scaleSnap: 0.001,
    rotationSnap: 1,
    initialZoom: 1.3,
    zoom: 1.3,
    nameHeight: 0.12
});
