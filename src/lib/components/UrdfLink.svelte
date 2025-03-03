<script lang="ts">
  // The link element describes a rigid body with an inertia, visual features, and collision properties. 
  import type IUrdfLink from "$lib/models/IUrdfLink";
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import UrdfVisual from "./UrdfVisual.svelte";
  import { getChildJoints } from "$lib/UrdfParser";
  import UrdfJoint from "./UrdfJoint.svelte";
  import { Billboard, Text } from "@threlte/extras";
  import type IUrdfJoint from "$lib/models/IUrdfJoint";

  interface Props {
    link: IUrdfLink
    parentJoint?: IUrdfJoint
  }

  let {
    link,
    parentJoint
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

  {#if urdf_viewer_state.linkNames }
  <Billboard position={[0, 0, 0]}>
    <Text
      anchorY={-.2}
      color={urdf_viewer_state.linkColor}
      scale={[0.1, 0.1, 0.1]}
      text={link.name}></Text>
  </Billboard>
  {/if}

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

