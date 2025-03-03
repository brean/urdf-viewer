<script lang="ts">
  // Three.js visualization of an URDF.
	import { T } from '@threlte/core';
  import { Quaternion, Vector3 } from 'three';
  import { getRootLinks } from '../UrdfParser';
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import type IUrdfLink from '$lib/models/IUrdfLink';
  import type IUrdfJoint from '$lib/models/IUrdfJoint';
  import UrdfLink from './UrdfLink.svelte';

  interface Props {
    position?: [x: number, y: number, z: number]
    quaternion?: [x: number, y: number, z: number, w:number]
    onselectionchange?: (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => void
    onchange?: (joint: IUrdfJoint) => void
  }
  let {
    position = [0, 0, 0],
    quaternion,
    onselectionchange = undefined,
    onchange = undefined
  }: Props = $props();
  
  // the axis in Three are different from urdf
  if (!quaternion) {
    const quat = new Quaternion();
    quat.setFromAxisAngle(new Vector3(-1, 0, 0), Math.PI * 0.5);
    quaternion = [quat.x, quat.y, quat.z, quat.w];
  }

// TODO: getRootLinks?
</script>

{#if urdf_viewer_state.robot}
<T.Group {position} {quaternion}>
  {#each getRootLinks(urdf_viewer_state.robot) as link}
    <UrdfLink {link} parentJoint={undefined}  />
  {/each}
</T.Group>
{/if}