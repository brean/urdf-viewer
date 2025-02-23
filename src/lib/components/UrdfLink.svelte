<script lang="ts">
  // The link element describes a rigid body with an inertia, visual features, and collision properties. 
  import { numberArrayToColor } from "$lib/helper";
  import type IUrdfLink from "$lib/models/IUrdfLink";
  import type IUrdfVisual from "$lib/models/IUrdfVisual";
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import { T } from "@threlte/core";
  import Selectable from "./SelectableJoint.svelte";
  import { onMount } from "svelte";
  import UrdfVisual from "./UrdfVisual.svelte";
  import { getChildJoints } from "$lib/UrdfParser";
  import UrdfJoint from "./UrdfJoint.svelte";

  interface Props {
    link: IUrdfLink
    onchange?: (link: IUrdfLink) => void
  }

  onMount(() => {
    console.log(link.name)
  });

  const onobjectChange = (event: any) => {
    if (!event.target) {
      return;
    }
    const obj = event.target.object;
    // updateData(obj);
    // if (onchange) {
    //   onchange(joint)
    // }
  };

  let {
    link
  }: Props = $props();

</script>

<!-- 
a link does not have a position, 
however visual and collision can have positions and its
position can be defined by the child origin from a joint,
we can show an arrow from the parent joint to the child joint -->

<!-- TODO: select and edit -->
{#if urdf_viewer_state.robot}
  {@html `<!-- Link ${link.name} -->`}
  <!-- {#if urdf_viewer_state.links }
  <T.Mesh>
    <T.SphereGeometry 
      args={[0.005]}
    />
    <T.MeshBasicMaterial
      color={urdf_viewer_state.linkColor}
      opacity={urdf_viewer_state.linkOpacity} 
      transparent={urdf_viewer_state.linkOpacity < 1.0} />
  </T.Mesh>
  {/if} -->

  {#if urdf_viewer_state.visual }
    {#each link.visual as visual}
      <UrdfVisual opacity={urdf_viewer_state.visualOpacity} {visual} {link} />  
    {/each}
  {/if}

  {#if urdf_viewer_state.collision }
    {#each link.collision as col}
      <UrdfVisual opacity={urdf_viewer_state.collisionOpacity} visual={col} {link} />
    {/each}
  {/if}

  {#each getChildJoints(urdf_viewer_state.robot, link) as child}
    <UrdfJoint
      joint={child} />
  {/each}
{/if}

