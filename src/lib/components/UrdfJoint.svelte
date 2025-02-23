<script lang="ts">
  // at a joint one or multiple links can connect
  import type IUrdfJoint from "../models/IUrdfJoint";
  import UrdfJoint from './UrdfJoint.svelte'
  import UrdfVisual from "./UrdfVisual.svelte";
  import { getChildJoints } from "../UrdfParser";
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import { onMount } from "svelte";
  import SelectableJoint from "./SelectableJoint.svelte";
  import type IUrdfLink from "$lib/models/IUrdfLink";
  import { T } from "@threlte/core";
  import UrdfLink from "./UrdfLink.svelte";

  interface Props {
    joint: IUrdfJoint
    onselectionchange?: (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => void
    onchange?: (joint: IUrdfJoint) => void
  }

  let {
    joint = $bindable(),
    onselectionchange = undefined,
    onchange = undefined
  }: Props = $props();
  
  onMount(() => {
    if (joint.type == "continuous" && joint.name) {
      urdf_viewer_state.continuousJoints[joint.name] = joint;
    } else if (joint.type == "revolute" && joint.name) {
      urdf_viewer_state.revoluteJoints[joint.name] = joint;
    }
  })

  const rotation = (rpy: [r: number, p: number, y: number]): [r: number, p: number, y: number] => {
    return [
      rpy[0] + Math.PI / 2, rpy[1], rpy[2]
    ]
  }

  let opacity = 0.7

  // a joint can have an origin position, its the difference to the
  // parent to the joint origin,
  // at this position we draw a cylinder
</script>

{@html `<!-- Joint ${joint.name} (${joint.type}) -->`}
{#if urdf_viewer_state.robot}
  <T.Group rotation={joint.rotation} position={joint.origin_xyz}>
    {#if urdf_viewer_state.joints }
      
      <T.Mesh
        rotation={rotation([0, 0, 0])}>
        <!-- cylinder are rotated 90° in Three compared to urdf -->
        <T.CylinderGeometry
          args={[0.005, 0.005, 0.05]}
        />
        <T.MeshBasicMaterial 
          color={'green'}
          {opacity}
          transparent={opacity < 1.0} />
      </T.Mesh>
    {/if}

    {#if urdf_viewer_state.links }
    {/if}
    <!-- draw arrow from parent link origin position to joint -->

  
    {#if joint.child}
      <UrdfLink link={joint.child} />
    {/if}
  </T.Group>
{/if}
