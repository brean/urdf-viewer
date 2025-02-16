<script lang="ts">
  import { T, useLoader } from '@threlte/core';
  import { Color } from 'three';
  import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

  interface Props {
    filename: string
    color?: Color
    scale?: [x: number, y: number, z: number]
    position?: [x: number, y: number, z: number]
    rotation?: [x: number, y: number, z: number]
    onclick?: (event: Event) => void
    opacity: number
  }
  let {
    filename,
     // use pink as fallback color
    color = new Color('pink'),
    scale = [1, 1, 1],
    rotation = [0, 0, 0],
    position = [0, 0, 0],
    onclick = () => {},
    opacity = 1.0
  }: Props = $props();

  const loader = useLoader(STLLoader);

  let stl = $derived(loader.load(filename));

</script>

{#if $stl}
  {@html `<!-- include stl: ${filename} ${scale} -->`}
  <T.Mesh castShadow receiveShadow geometry={$stl} {scale}
    {onclick}
    {position} {rotation}>
		<T.MeshLambertMaterial {color} {opacity} transparent={opacity < 1.0} />
	</T.Mesh>
{/if}