<script lang="ts">
  import { T } from "@threlte/core";
  import type { IUrdfJoint } from "../models/IUrdfJoint";
  import UrdfVisual from "./UrdfVisual.svelte";
  import robot_urdf from "../store/robot_urdf";
  import { getChildJoints } from "../UrdfParser";

  export let joint: IUrdfJoint;
</script>

{@html `<!-- Joint ${joint.name} -->`}
{#if $robot_urdf}
  <T.Group rotation={joint.origin_rpy} position={joint.origin_xyz}>
    {#each joint.child.visual as visual}
      <UrdfVisual {visual} link={joint.child} />
      {#each getChildJoints($robot_urdf, joint.child) as child}
        <svelte:self joint={child} />
      {/each}
    {/each}
  </T.Group>
{/if}
