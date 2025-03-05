<script lang="ts">
  // Three.js visualization of an URDF.
	import { T } from '@threlte/core';
  import { getRootLinks } from '../UrdfParser';
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import UrdfLink from './UrdfLink.svelte';

  interface Props {
    position?: [x: number, y: number, z: number]
    quaternion?: [x: number, y: number, z: number, w:number]
    ondatachange?: (event: any) => void
  }
  let {
    position = [0, 0, 0],
    quaternion = [0, 0, 0, 1],
    ondatachange = undefined
  }: Props = $props();
  
// TODO: getRootLinks?
</script>

{#if urdf_viewer_state.robot}
<T.Group {position} {quaternion}>
  {#each getRootLinks(urdf_viewer_state.robot) as link}
    <UrdfLink {link} {ondatachange}  />
  {/each}
</T.Group>
{/if}