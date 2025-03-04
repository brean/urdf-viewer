import type IUrdfVisual from "./IUrdfVisual"

export default interface IUrdfLink {
  name: string
  visual: IUrdfVisual[]
  collision: IUrdfVisual[]
  elem: Element
}