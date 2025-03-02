<script lang="ts">
  // at a joint one or multiple links can connect
  import type IUrdfJoint from "../models/IUrdfJoint";
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import type IUrdfLink from "$lib/models/IUrdfLink";
  import { T } from "@threlte/core";
  import UrdfLink from "./UrdfLink.svelte";
  import { BufferGeometry, Vector3 } from "three";
  import { Billboard, Text } from "@threlte/extras";

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

  let lineGeometry: BufferGeometry | undefined = $state();

  $effect(() => {
    const lineGeometryPoints: Vector3[] = [
      new Vector3(0, 0, 0),
      new Vector3(
        joint.origin_xyz[0], joint.origin_xyz[1], joint.origin_xyz[2]
      )
    ];
    if (!lineGeometry) {
      lineGeometry = new BufferGeometry()
    }
    lineGeometry.setFromPoints(lineGeometryPoints);
  });

  // a joint can have an origin position, its the difference to the
  // parent to the joint origin,
  // at this position we draw a cylinder
</script>

{@html `<!-- Joint ${joint.name} (${joint.type}) -->`}
{#if urdf_viewer_state.robot}
  {#if urdf_viewer_state.jointNames }
    <Billboard
        position.x={joint.origin_xyz[0] / 2}
        position.y={joint.origin_xyz[1] / 2}
        position.z={joint.origin_xyz[2] / 2}>
      <Text
        color={"#ff8888"}
        scale={[0.1, 0.1, 0.1]}
        text={joint.name}></Text>
    </Billboard>
  {/if}

  <!-- draw red line from parent-frame to joint origin -->
  {#if urdf_viewer_state.links }
  <T.Line geometry={lineGeometry} {onclick}>
    <T.LineBasicMaterial
      color={"#ff0000"}
    />
  </T.Line>
  {/if}


  <T.Group
    rotation={joint.rotation}
    position={joint.origin_xyz}>

    {#if urdf_viewer_state.joints }
      
      <T.Mesh
        rotation={rotation([0, 0, 0])}>
        <!-- cylinder are rotated 90° in Three compared to urdf -->
        <T.CylinderGeometry
          args={[0.005, 0.005, 0.05]}
        />
        {#if opacity < 1.0}
        <T.MeshBasicMaterial color={'green'} {opacity} transparent={true} />
        {:else}
        <T.MeshBasicMaterial color={'green'} />
        {/if}
      </T.Mesh>
    {/if}

  
    {#if joint.child}
      <UrdfLink link={joint.child} />
    {/if}
  </T.Group>
{/if}
