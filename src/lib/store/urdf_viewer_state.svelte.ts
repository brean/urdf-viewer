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
    joints: boolean
    links: boolean
    jointNames: boolean
    linkNames: boolean
    highlightColor: Color
    visualOpacity: number
    linkColor: Color
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
    joints: true,
    links: true,
    jointNames: true,
    linkNames: true,
    linkColor: new Color('green'),
    linkOpacity: 1.0,
    highlightColor: new Color(2, 0.5, 0.5),
    visualOpacity: 1.0,
    collisionOpacity: 0.7
});
