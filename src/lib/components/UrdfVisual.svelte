<script lang="ts">
  import type IUrdfMesh from "../models/IUrdfMesh";
  import type IUrdfVisual from "../models/IUrdfVisual";
  import { numberArrayToColor } from "../helper";
  import DAE from "./DAE.svelte";
  import STL from "./STL.svelte";
  import { T } from "@threlte/core";
  import { interactivity } from "@threlte/extras";
  import type IUrdfLink from "../models/IUrdfLink";
  import type IUrdfCylinder from "../models/IUrdfCylinder";
  import type IUrdfBox from "../models/IUrdfBox";
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import { Color } from "three";

  interface Props {
    visual?: IUrdfVisual
    link?: IUrdfLink
    onselectionchange?: (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => void
  }

  let {
    visual,
    link,
    onselectionchange = undefined
  }: Props = $props();

  const color = $derived(
    link?.highlight ? urdf_viewer_state.highlightColor : numberArrayToColor(visual ? visual.color_rgba : undefined));
  
  const onclick = (event: Event) => {
    event.stopPropagation();
    if (onselectionchange) {
      onselectionchange(urdf_viewer_state.selection, link);
    }
    urdf_viewer_state.selection = link;
  }

  interactivity();  
</script>

{#if visual && visual.type === 'mesh' && visual.geometry}
  {#if (visual.geometry as IUrdfMesh).type === 'stl'}
    <STL
      {onclick}
      filename={(visual.geometry as IUrdfMesh).filename}
      position={visual.origin_xyz || [0, 0, 0]}
      rotation={visual.origin_rpy || [0, 0, 0]}
      {color}
      scale={(visual.geometry as IUrdfMesh).scale || [1, 1, 1]} />
  {:else if (visual.geometry as IUrdfMesh).type === 'dae'}
    <DAE
      {onclick}
      filename={(visual.geometry as IUrdfMesh).filename}
      position={visual.origin_xyz || [0, 0, 0]}
      rotation={visual.origin_rpy || [0, 0, 0]}
      {color}
      scale={(visual.geometry as IUrdfMesh).scale || [1, 1, 1]} />
  {/if}
{:else if visual}
  {#if visual.type === 'cylinder'}
	  <T.Mesh castShadow receiveShadow
      {onclick}
      position={visual.origin_xyz || [0, 0, 0]}
      rotation={visual.origin_rpy || [0, 0, 0]}>
      <!-- cylinder are rotated 90° in Three compared to urdf -->
		  <T.CylinderGeometry 
        args={[
          (visual.geometry as IUrdfCylinder).radius, 
          (visual.geometry as IUrdfCylinder).radius,
          (visual.geometry as IUrdfCylinder).length]}
       />
       <T.MeshBasicMaterial {color} />
    </T.Mesh>
  {:else if visual.type === 'box'}
    <T.Mesh castShadow receiveShadow
      scale={(visual.geometry as IUrdfBox).size || [1, 1, 1]}
      {onclick}
      position={visual.origin_xyz || [0, 0, 0]}
      rotation={visual.origin_rpy || [0, 0, 0]}>
      <T.BoxGeometry />
      <T.MeshBasicMaterial {color} />
    </T.Mesh>
  {/if}
{/if}