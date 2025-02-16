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
  {#if urdf_viewer_state.display == 'visual'}
    {#each joint.child.visual as visual}
      <SelectableJoint {joint} selected={urdf_viewer_state.selection == joint.child}>
        <UrdfVisual opacity={urdf_viewer_state.visualOpacity} {visual} link={joint.child} {onselectionchange} />
      </SelectableJoint>
    {/each}

  {:else if urdf_viewer_state.display == 'collision'}
    {#each joint.child.collision as col}
    <SelectableJoint {joint} selected={urdf_viewer_state.selection == joint.child}>
      <UrdfVisual opacity={urdf_viewer_state.collisionOpacity} visual={col} link={joint.child} {onselectionchange} />
    </SelectableJoint>
    {/each}
  {/if}
  {#each getChildJoints(urdf_viewer_state.robot, joint.child) as child}
    <UrdfJoint {onselectionchange} joint={child} />
  {/each}
{/if}
