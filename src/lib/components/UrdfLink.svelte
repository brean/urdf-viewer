<script lang="ts">
  // The link element describes a rigid body with an inertia, visual features, and collision properties. 
  import type IUrdfLink from "$lib/models/IUrdfLink";
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import UrdfVisual from "./UrdfVisual.svelte";
  import { getChildJoints } from "$lib/UrdfParser";
  import UrdfJoint from "./UrdfJoint.svelte";
  import { Billboard, Text } from "@threlte/extras";
  import { textScale } from "$lib/helper";

  interface Props {
    link: IUrdfLink
    ondatachange?: (event: any) => void
  }

  let {
    link,
    ondatachange = undefined
  }: Props = $props();

  function billboardPos(): [x: number, y: number, z: number] {
    if (link.collision && link.collision.length > 0) {
      return link.collision[0].origin_xyz;
    }
    if (link.visual && link.visual.length > 0) {
      return link.visual[0].origin_xyz;
    }
    return [0, 0, 0]
  }
</script>

<!-- 
a link does not have a position, 
so we show the Billboard text just 0.2 meter above the joints origin.
however visual and collision can have positions and its
position can be defined by the child origin from a joint, -->

<!-- TODO: select and edit -->
{#if urdf_viewer_state.robot}
  {@html `<!-- Link ${link.name} -->`}

  {#if urdf_viewer_state.linkNames }
  <Billboard position={billboardPos()}>
    <Text
      anchorY={-.2}
      color={urdf_viewer_state.selectedLink == link ? urdf_viewer_state.highlightColor : urdf_viewer_state.linkColor}
      scale={textScale(urdf_viewer_state.nameHeight)}
      text={link.name}></Text>
  </Billboard>
  {/if}

  {#if urdf_viewer_state.visual }
    {#each link.visual as visual}
      <UrdfVisual
        {ondatachange}
        opacity={urdf_viewer_state.visualOpacity}
        {visual}
        {link} />  
    {/each}
  {/if}

  {#if urdf_viewer_state.collision }
    {#each link.collision as col}
      <UrdfVisual
        {ondatachange}
        opacity={urdf_viewer_state.collisionOpacity}
        visual={col}
        color={urdf_viewer_state.collisionColor}
        {link} />
    {/each}
  {/if}

  {#each getChildJoints(urdf_viewer_state.robot, link) as child}
    <UrdfJoint
      {ondatachange}
      joint={child} />
  {/each}
{/if}

