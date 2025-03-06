import type IUrdfJoint from "./IUrdfJoint"
import type IUrdfLink from "./IUrdfLink"

export default interface IUrdfRobot {
  name: string
  links: {[name: string]: IUrdfLink}
  joints: IUrdfJoint[]
  // the DOM element holding the XML, so we can work non-destructive
  elem?: Element
}