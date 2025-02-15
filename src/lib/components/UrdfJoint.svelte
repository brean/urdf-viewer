<script lang="ts">
  import { T } from "@threlte/core";
  import type IUrdfJoint from "../models/IUrdfJoint";
  import UrdfJoint from './UrdfJoint.svelte'
  import UrdfVisual from "./UrdfVisual.svelte";
  import { getChildJoints } from "../UrdfParser";
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import { onMount } from "svelte";

  let { joint }: {joint: IUrdfJoint} = $props();
  
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
  <T.Group rotation={joint.rotation} position={joint.origin_xyz}>
    {#each joint.child.visual as visual}
      <UrdfVisual {visual} link={joint.child} />
      {#each getChildJoints(urdf_viewer_state.robot, joint.child) as child}
        <UrdfJoint joint={child} />
      {/each}
    {/each}
  </T.Group>
{/if}
