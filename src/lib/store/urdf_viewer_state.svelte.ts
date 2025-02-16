import type IUrdfJoint from "$lib/models/IUrdfJoint"
import type IUrdfLink from "$lib/models/IUrdfLink"
import type IUrdfRobot from "$lib/models/IUrdfRobot"
import { Color } from "three";

export const urdf_viewer_state = $state<{
    selection?: IUrdfLink
    robot?: IUrdfRobot
    edit: boolean // add TransformControls when we can edit the element
    continuousJoints: {[name: string]: IUrdfJoint}
    revoluteJoints: {[name: string]: IUrdfJoint}
    editMode?: "translate" | "rotate" | "scale"
    display: 'visual' | 'collision'
    highlightColor: Color
    visualOpacity: number,
    collisionOpacity: number
}>({
    edit: false,
    editMode: 'translate',
    selection: undefined,
    robot: undefined,
    continuousJoints: {},
    revoluteJoints: {},
    display: 'visual',
    highlightColor: new Color(2, 0.5, 0.5),
    visualOpacity: 1.0,
    collisionOpacity: 0.7
});
