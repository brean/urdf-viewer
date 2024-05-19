<script lang="ts">
  // Three.js visualisation of a URDF.
	import { T } from '@threlte/core'
  import { Quaternion, Vector3 } from 'three';
  import robot_urdf from '../store/robot_urdf';
  import UrdfJoint from './UrdfJoint.svelte';
  import { getRootJoints } from '../UrdfParser';

  export let position: [x: number, y: number, z: number] = [0, 0, 0];
  export let quaternion: [x: number, y: number, z: number, w:number] | undefined = undefined;
  
  // the axis in Three are different from urdf
  if (!quaternion) {
    const quat = new Quaternion();
    quat.setFromAxisAngle(new Vector3(-1, 0, 0), Math.PI * 0.5);
    quaternion = [quat.x, quat.y, quat.z, quat.w];
  }

</script>

{#if $robot_urdf}
<T.Group position={position} quaternion={quaternion}>
  {#each getRootJoints($robot_urdf) as joint}
    <UrdfJoint
      {joint}
    />
  {/each}
</T.Group>
{/if}