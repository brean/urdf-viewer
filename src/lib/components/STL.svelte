<script lang="ts">
  import { T, useLoader } from '@threlte/core';
  import { Color } from 'three';
  import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

  export let filename: string;
  // use pink as fallback color
  export let color: Color = new Color('pink');
  export let scale: number[] = [1, 1, 1];
  export let rotation: number[] = [0, 0, 0];
  export let position: number[] = [0, 0, 0];
  export let onclick: (event: Event) => void;

  const loader = useLoader(STLLoader);

  let stl;
  $: {
    stl = loader.load(filename)
  }
</script>

{#if $stl}
  {@html `<!-- include stl: ${filename} ${scale} -->`}
  <T.Mesh castShadow receiveShadow geometry={$stl} {scale}
    on:click={onclick}
    {position} {rotation}>
		<T.MeshLambertMaterial {color} />
	</T.Mesh>
{/if}