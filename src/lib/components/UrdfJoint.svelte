<script lang="ts">
  import { T } from "@threlte/core";
  import type { IUrdfJoint } from "../models/IUrdfJoint";
  import UrdfJoint from './UrdfJoint.svelte'
  import UrdfVisual from "./UrdfVisual.svelte";
  import robot_urdf from "../store/robot_urdf";
  import { getChildJoints } from "../UrdfParser";
  import continuous_joints from "$lib/store/continuous_joints";
  import { onMount } from "svelte";

  export let joint: IUrdfJoint;
  
  onMount(() => {
    if (joint.type == "continuous" && joint.name) {
      $continuous_joints[joint.name] = joint;
    }
  })
</script>

{@html `<!-- Joint ${joint.name} (${joint.type}) -->`}
{#if $robot_urdf}
  <T.Group rotation={joint.rotation} position={joint.origin_xyz}>
    {#each joint.child.visual as visual}
      <UrdfVisual {visual} link={joint.child} />
      {#each getChildJoints($robot_urdf, joint.child) as child}
        <UrdfJoint joint={child} />
      {/each}
    {/each}
  </T.Group>
{/if}
