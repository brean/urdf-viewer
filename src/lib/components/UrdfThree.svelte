<script lang="ts">
  // Three.js visualisation of a URDF.
	import { T } from '@threlte/core';
  import { Quaternion, Vector3 } from 'three';
  import UrdfJoint from './UrdfJoint.svelte';
  import { getRootJoints } from '../UrdfParser';
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";

  interface Props {
    position?: [x: number, y: number, z: number]
    quaternion?: [x: number, y: number, z: number, w:number]
  }
  let {
    position = [0, 0, 0],
    quaternion
  }: Props = $props();
  
  // the axis in Three are different from urdf
  if (!quaternion) {
    const quat = new Quaternion();
    quat.setFromAxisAngle(new Vector3(-1, 0, 0), Math.PI * 0.5);
    quaternion = [quat.x, quat.y, quat.z, quat.w];
  }

</script>

{#if urdf_viewer_state.robot}
<T.Group {position} {quaternion}>
  {#each getRootJoints(urdf_viewer_state.robot) as joint}
    <UrdfJoint
      {joint}
    />
  {/each}
</T.Group>
{/if}