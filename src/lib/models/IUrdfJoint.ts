import type IUrdfLink from "./IUrdfLink"
// TODO: maybe a class instead of an interface so we can call functions
// to get children etc.

export default interface IUrdfJoint {
  name?: string
  type?: 'revolute' | 'continuous' | 'prismatic' | 'fixed' | 'floating' | 'planar'
  // rpy = roll, pitch, yaw (values between -pi and +pi)
  origin_rpy: [roll: number, pitch: number, yaw: number]
  origin_xyz: [x: number, y: number, z: number]
  // calculated rotation for non-fixed joints based on origin_rpy and axis_xyz
  rotation: [x: number, y: number, z: number]
  parent: IUrdfLink
  child: IUrdfLink
  // axis for revolute and continuous joints defaults to (1,0,0)
  axis_xyz?: [x: number, y: number, z: number]
  calibration?: {
    rising?: any,  // TODO
    falling?: any
  }
  dynamics?: {
    damping?: number
    friction?: number
  }
  // only for revolute joints
  limit?: {
    lower?: number
    upper?: number
    effort: number
    velocity: number
  }
  mimic?: {
    joint: string
    multiplier?: number
    offset?: number
  }
  safety_controller?: {
    soft_lower_limit?: number
    soft_upper_limit?: number
    k_position?: number
    k_velocity: number
  }
  elem: Element
}