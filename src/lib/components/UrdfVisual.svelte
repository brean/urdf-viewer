<script lang="ts">
  import type { IUrdfMesh } from "../models/IUrdfMesh";
  import type { IUrdfVisual } from "../models/IUrdfVisual";
  import { numberArrayToColor } from "../helper";
  import DAE from "./DAE.svelte";
  import STL from "./STL.svelte";
  import { T } from "@threlte/core";
  import { interactivity } from "@threlte/extras";
  import type { IUrdfLink } from "../models/IUrdfLink";
  import type { IUrdfCylinder } from "../models/IUrdfCylinder";
  import type { IUrdfBox } from "../models/IUrdfBox";
    import selection from "$lib/store/selection";

  export let visual:IUrdfVisual;
  export let link: IUrdfLink;
  let cylinder: IUrdfCylinder;
  let box: IUrdfBox;

  const position = visual.origin_xyz || [0, 0, 0];
  const rotation = visual.origin_rpy || [0, 0, 0];
  const color = numberArrayToColor(visual.color_rgba);
  let scale: number[] = [1, 1, 1];
  let mesh: IUrdfMesh;
  
  switch (visual.type) {
    case 'mesh':
      mesh = visual.geometry as IUrdfMesh
      scale = mesh.scale;
      break;
    case 'box':
      box = visual.geometry as IUrdfBox
      break
    case 'cylinder':
      cylinder = visual.geometry as IUrdfCylinder;
      break
  }

  const onClick = () => {
    selection.select(link)
  }

  interactivity();  
</script>

{#if visual.type === 'mesh' && mesh}
  {#if mesh.type === 'stl'}
    <STL
      onclick={onClick}
      filename={mesh.filename}
      {position}
      {rotation}
      {color}
      {scale} />
  {:else if mesh.type === 'dae'}
    <DAE
      onclick={onClick}
      filename={mesh.filename}
      {position}
      {rotation}
      {color}
      {scale} />
  {/if}
{:else}
	<T.Mesh castShadow receiveShadow
      scale={scale}
      on:click={onClick}
      {position}
      {rotation}>
    {#if visual.type === 'cylinder'}
      <!-- cylinder are rotated 90° in Three compared to urdf -->
		  <T.CylinderGeometry 
        args={[cylinder.radius, cylinder.radius, cylinder.length]}  
       />
    {:else if visual.type === 'box'}
      <T.BoxGeometry />
    {/if}
		<T.MeshBasicMaterial {color} />
	</T.Mesh>
{/if}