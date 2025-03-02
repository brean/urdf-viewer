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

  interface Props {
    visual?: IUrdfVisual
    link?: IUrdfLink
    onselectionchange?: (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => void
    opacity: number
  }

  let {
    visual,
    link,
    onselectionchange = undefined,
    opacity = 1.0
  }: Props = $props();

  const color = $derived(
    link?.highlight ? urdf_viewer_state.highlightColor : numberArrayToColor(visual ? visual.color_rgba : undefined));

  const onclick = (event: Event) => {
    event.stopPropagation();
    if (onselectionchange) {
      onselectionchange(urdf_viewer_state.selectedLink, link);
    }
    urdf_viewer_state.selectedLink = link;
  }

  interactivity();  

  const rotation = (rpy: [r: number, p: number, y: number]): [r: number, p: number, y: number] => {
    return [
      rpy[0] + Math.PI / 2, rpy[1], rpy[2]
    ]
  }
</script>

{#if visual}
  {#if visual.type === 'mesh' && visual.geometry}
    {#if (visual.geometry as IUrdfMesh).type === 'stl'}
      <STL
        {onclick}
        filename={(visual.geometry as IUrdfMesh).filename}
        position={visual.origin_xyz || [0, 0, 0]}
        rotation={visual.origin_rpy || [0, 0, 0]}
        {color}
        {opacity}
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
  {:else}
    {#if visual.type === 'cylinder'}
      <T.Mesh castShadow receiveShadow
        {onclick}
        position={visual.origin_xyz || [0, 0, 0]}
        rotation={rotation(visual.origin_rpy || [0, 0, 0])}>
        <!-- TODO: default to z-up -->
        <!-- cylinder are rotated 90° in Three compared to urdf -->
        <T.CylinderGeometry 
          args={[
            (visual.geometry as IUrdfCylinder).radius, 
            (visual.geometry as IUrdfCylinder).radius,
            (visual.geometry as IUrdfCylinder).length]}
        />
        {#if opacity < 1.0}
        <T.MeshBasicMaterial {color} {opacity} transparent={true} />
        {:else}
        <T.MeshBasicMaterial {color} />
        {/if}
      </T.Mesh>
    {:else if visual.type === 'box'}
      <T.Mesh castShadow receiveShadow
        scale={(visual.geometry as IUrdfBox).size || [1, 1, 1]}
        {onclick}
        position={visual.origin_xyz || [0, 0, 0]}
        rotation={visual.origin_rpy || [0, 0, 0]}>
        <T.BoxGeometry />
        {#if opacity < 1.0}
        <T.MeshBasicMaterial {color} {opacity} transparent={true} />
        {:else}
        <T.MeshBasicMaterial {color} />
        {/if}
      </T.Mesh>
    {/if}
  {/if}
{/if}