<script lang="ts">
  // at a joint one or multiple links can connect
  import type IUrdfJoint from "../models/IUrdfJoint";
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import type IUrdfLink from "$lib/models/IUrdfLink";
  import { T } from "@threlte/core";
  import UrdfLink from "./UrdfLink.svelte";
  import { BufferGeometry, Color, Vector3 } from "three";
  import { Billboard, interactivity, MeshLineGeometry, Text } from "@threlte/extras";
  import Selectable from "./Selectable.svelte";

  interface Props {
    joint: IUrdfJoint
    onselectionchange?: (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => void
    onchange?: (joint: IUrdfJoint) => void
  }

  let {
    joint,
    onselectionchange = undefined,
    onchange = undefined
  }: Props = $props();
  
  const rotation = (rpy: [r: number, p: number, y: number]): [r: number, p: number, y: number] => {
    return [
      rpy[0] + Math.PI / 2, rpy[1], rpy[2]
    ]
  }

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
        color={urdf_viewer_state.selectedJoint == joint ? urdf_viewer_state.highlightColor : urdf_viewer_state.jointColor}
        scale={[0.1, 0.1, 0.1]}
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
    origin={joint}
    selected={urdf_viewer_state.selectedJoint == joint}>

    {#if urdf_viewer_state.joints }
      <T.Line>
        <MeshLineGeometry
        {onclick}
          points={[new Vector3(0, 0, 0), new Vector3(0, -.02, 0)]} />
        <T.LineBasicMaterial
          color={
            urdf_viewer_state.jointIndicatorColor
          }
        />
      </T.Line>

        <T.Mesh
          {onclick}
          rotation={rotation([0, 0, 0])}>
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

  
    {#if joint.child}
      <UrdfLink link={joint.child} />
    {/if}
  </Selectable>
{/if}
