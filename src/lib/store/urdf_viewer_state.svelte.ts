import type IUrdfJoint from "$lib/models/IUrdfJoint"
import type IUrdfLink from "$lib/models/IUrdfLink"
import type IUrdfRobot from "$lib/models/IUrdfRobot"

export const urdf_viewer_state = $state<{
    selection?: IUrdfLink
    robot?: IUrdfRobot
    continuousJoints: {[name: string]: IUrdfJoint}
    revoluteJoints: {[name: string]: IUrdfJoint}
}>({
    selection: undefined,
    robot: undefined,
    continuousJoints: {},
    revoluteJoints: {}
})