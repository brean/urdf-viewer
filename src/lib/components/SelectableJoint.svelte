<!-- A component that can be selected, this component wraps around
the actual component and shows either transform controls or just a 
group-->
<script lang="ts">
  import { T } from "@threlte/core";
  import { TransformControls, interactivity } from '@threlte/extras';
	import type { Object3D } from "three";
	import type { Snippet } from "svelte";
  import type IUrdfJoint from "$lib/models/IUrdfJoint";
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import { updateJoint } from "$lib/UrdfParser";

  interface Props {
    joint: IUrdfJoint
    children?: Snippet // renderable
    selected?: boolean
  }

  let {
    joint = $bindable(),
    children,
    selected = false
  }: Props = $props();

  const rot = ((): [x: number, y: number, z: number] => {
    return [
      -joint.origin_rpy[0] + joint.rotation[0],
      -joint.origin_rpy[1] + joint.rotation[1],
      -joint.origin_rpy[2] + joint.rotation[2]
    ]
  })

  const updateData = (obj: Object3D) => {
    joint.origin_xyz = obj.position.toArray();
    joint.origin_rpy = [
      obj.rotation.x,
      obj.rotation.y,
      obj.rotation.z,
    ]
    updateJoint( joint );
  }

  const onobjectChange = (event: any) => {
    if (!event.target) {
      return;
    }
    const obj = event.target.object;
    updateData(obj);
  };

  interactivity();
</script>
{#if selected && urdf_viewer_state.edit }
<TransformControls
  position={joint.origin_xyz}
  rotation={joint.origin_rpy}
  mode={urdf_viewer_state.editMode}
  {onobjectChange}
  >
  <T.Group rotation={rot()}>
    {@render children?.()}
  </T.Group>
</TransformControls>
{:else}
<T.Group
  position={joint.origin_xyz}
  rotation={joint.origin_rpy}
  >
  <T.Group rotation={rot()}>
    {@render children?.()}
  </T.Group>
</T.Group>
{/if}
