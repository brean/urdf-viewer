import type IUrdfJoint from "$lib/models/IUrdfJoint"
import type IUrdfLink from "$lib/models/IUrdfLink"
import type IUrdfRobot from "$lib/models/IUrdfRobot"
import { Color } from "three";

export const urdf_viewer_state = $state<{
    selectedLink?: IUrdfLink
    selectedJoint?: IUrdfJoint
    robot?: IUrdfRobot
    edit: boolean // add TransformControls when we can edit the element
    continuousJoints: {[name: string]: number}
    revoluteJoints: {[name: string]: number}
    editMode?: "translate" | "rotate" | "scale"
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
}>({
    edit: false,
    editMode: 'translate',
    selectedLink: undefined,
    selectedJoint: undefined,
    robot: undefined,
    continuousJoints: {},
    revoluteJoints: {},
    visual: true,
    collision: false,
    collisionColor: "#deddda",
    joints: true,
    jointNames: true,
    jointColor: "#62a0ea", // blue
    linkNames: true,
    linkColor: "#57e389", // green
    jointIndicatorColor: "#f66151", // red
    linkOpacity: 1.0,
    highlightColor: "#ffa348", // orange
    visualOpacity: 1.0,
    collisionOpacity: 0.7
});
