import type IUrdfVisual from "./IUrdfVisual"

export default interface IUrdfLink {
  name: string
  inertial?: {
    origin_xyz?: [x: number, y: number, z: number]
    origin_rpy?: [roll: number, pitch: number, yaw: number]
    mass: number
    inertia: any
  }
  visual: IUrdfVisual[]
  collision: IUrdfVisual[]
  elem: Element
}