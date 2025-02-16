<script lang="ts">
  import type IUrdfJoint from "../models/IUrdfJoint";
  import UrdfJoint from './UrdfJoint.svelte'
  import UrdfVisual from "./UrdfVisual.svelte";
  import { getChildJoints } from "../UrdfParser";
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import { onMount } from "svelte";
  import SelectableJoint from "./SelectableJoint.svelte";
  import type IUrdfLink from "$lib/models/IUrdfLink";

  interface Props {
    joint: IUrdfJoint
    onselectionchange?: (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => void
  }

  let {
    joint = $bindable(),
    onselectionchange = undefined
  }: Props = $props();
  
  onMount(() => {
    if (joint.type == "continuous" && joint.name) {
      urdf_viewer_state.continuousJoints[joint.name] = joint;
    } else if (joint.type == "revolute" && joint.name) {
      urdf_viewer_state.revoluteJoints[joint.name] = joint;
    }
  })
</script>

{@html `<!-- Joint ${joint.name} (${joint.type}) -->`}
{#if urdf_viewer_state.robot}
  <!-- <T.Group rotation={joint.rotation} position={joint.origin_xyz}> -->
  {#each joint.child.visual as visual}
    <SelectableJoint {joint} selected={urdf_viewer_state.selection == joint.child}>
      <UrdfVisual {visual} link={joint.child} {onselectionchange} />
    </SelectableJoint>
    {#each getChildJoints(urdf_viewer_state.robot, joint.child) as child}
      <UrdfJoint {onselectionchange} joint={child} />
    {/each}
  {/each}
{/if}
