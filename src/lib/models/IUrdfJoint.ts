import type { IUrdfLink } from "./IUrdfLink"
// TODO: maybe a class instead of an interface so we can call functions
// to get children etc.

export interface IUrdfJoint {
  name?: string
  type?: string
  // rpy = roll, pitch, yaw (values between -pi and +pi)
  origin_rpy: [roll: number, pitch: number, yaw: number]
  origin_xyz: [x: number, y: number, z: number]
  // calculated rotation for non-fixed joints based on origin_rpy and axis_xyz
  rotation: [x: number, y: number, z: number]
  parent: IUrdfLink
  child: IUrdfLink
  // axis for revolute and continuous joints
  axis_xyz: [x: number, y: number, z: number]
  // only for revolute joints
  limit?: {
    lower: number
    upper: number
    effort: number
    velocity: number
  }
}