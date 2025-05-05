<script lang="ts">
  import { T, useLoader } from '@threlte/core';
  import { Color, Group } from 'three';
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

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
  
  let obj = $state<undefined | Group>();

  const objLoader = new OBJLoader();
  objLoader.load(filename, (data) => {
    obj = data;
  })

</script>

{#if obj}
  {@html `<!-- include obj: ${filename} ${scale} -->`}
  <T is={obj} {onclick} {position} {rotation} {scale}>
    {#if opacity < 1.0}
		<T.MeshLambertMaterial {color} {opacity} transparent={true} />
    {:else}
    <T.MeshLambertMaterial {color} />
    {/if}
  </T>
{/if}
