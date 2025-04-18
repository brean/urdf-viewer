<script lang="ts">
  // at a joint one or multiple links can connect
  import type IUrdfJoint from "../models/IUrdfJoint";
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import { T } from "@threlte/core";
  import UrdfLink from "./UrdfLink.svelte";
  import { Vector3 } from "three";
  import { Billboard, interactivity, MeshLineGeometry, Text } from "@threlte/extras";
  import Selectable from "./Selectable.svelte";
  import { textScale } from "$lib/helper";

  interface Props {
    joint: IUrdfJoint
    ondatachange?: (joint: IUrdfJoint) => void
  }

  let {
    joint,
    ondatachange = undefined
  }: Props = $props();
  
  let opacity = 0.7

  const onclick = (event: Event) => {
    event.stopPropagation();
    urdf_viewer_state.selectedLink = undefined;
    urdf_viewer_state.selectedJoint = joint;
  }

  interactivity();
  // a joint can have an origin position, its the difference to the
  // parent to the joint origin,
  // at this position we draw a cylinder
</script>

{@html `<!-- Joint ${joint.name} (${joint.type}) -->`}
{#if urdf_viewer_state.robot}
  {#if urdf_viewer_state.jointNames }
    <Billboard
        position.x={joint.origin_xyz[0]}
        position.y={joint.origin_xyz[1]}
        position.z={joint.origin_xyz[2]}>
      <Text
        scale={textScale(urdf_viewer_state.nameHeight)}
        color={urdf_viewer_state.selectedJoint == joint ? urdf_viewer_state.highlightColor : urdf_viewer_state.jointColor}
        text={joint.name}></Text>
    </Billboard>
  {/if}

  <!-- draw line from parent-frame to joint origin -->
  {#if urdf_viewer_state.joints }
  <T.Line>
    <MeshLineGeometry points={[new Vector3(0, 0, 0), new Vector3(joint.origin_xyz[0], joint.origin_xyz[1], joint.origin_xyz[2])]} />
    <T.LineBasicMaterial
      color={urdf_viewer_state.jointColor}
    />
  </T.Line>
  {/if}


  <Selectable
    {ondatachange}
    origin={joint}
    selected={urdf_viewer_state.selectedJoint == joint}>

    <T.Group
      rotation={joint.rotation || [0, 0, 0]}>
      {#if joint.child}
        <UrdfLink link={joint.child} {ondatachange} />
      {/if}

      {#if urdf_viewer_state.joints }

        <T.Line>
          <MeshLineGeometry
            {onclick}
            points={[
              new Vector3(0, 0, 0),
              new Vector3(0, -.02, 0)]} />
          <T.LineBasicMaterial
            color={
              urdf_viewer_state.jointIndicatorColor
            }
          />
        </T.Line>

        <T.Mesh
          {onclick}
          rotation={[Math.PI / 2, 0, 0]}>
          <!-- TODO: default to z-up -->
          <!-- cylinder are rotated 90° in Three compared to urdf -->
          <T.CylinderGeometry
            args={[0.004, 0.004, 0.03]}
          />
          {#if opacity < 1.0}
          <T.MeshBasicMaterial
            color={urdf_viewer_state.selectedJoint == joint ? urdf_viewer_state.highlightColor : urdf_viewer_state.jointColor}
            {opacity}
            transparent={true} />
          {:else}
          <T.MeshBasicMaterial
            color={urdf_viewer_state.selectedJoint == joint ? urdf_viewer_state.highlightColor : urdf_viewer_state.jointColor} />
          {/if}
        </T.Mesh>
      {/if}
    </T.Group>
  </Selectable>
{/if}
