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
  import type IUrdfVisual from "$lib/models/IUrdfVisual";

  interface Props {
    origin: IUrdfJoint | IUrdfVisual
    children?: Snippet // renderable
    selected?: boolean
    onchange?: (joint: IUrdfJoint) => void
  }

  let {
    origin,
    children,
    selected = false,
    onchange = undefined
  }: Props = $props();

  const updateData = (obj: Object3D) => {
    origin.origin_xyz = obj.position.toArray();
    origin.origin_rpy = [
      obj.rotation.x,
      obj.rotation.y,
      obj.rotation.z,
    ]
    updateJoint( origin );
  }

  const onobjectChange = (event: any) => {
    if (!event.target) {
      return;
    }
    const obj = event.target.object;
    updateData(obj);
    if (onchange) {
      onchange(event)
    }
  };

  interactivity();
</script>
{#if selected && urdf_viewer_state.edit }
<TransformControls
  position={origin.origin_xyz}
  rotation={origin.origin_rpy}
  mode={urdf_viewer_state.tool}
  {onobjectChange}
  >
  {@render children?.()}
</TransformControls>
{:else}
<T.Group
  position={origin.origin_xyz}
  rotation={origin.origin_rpy}
  >
  {@render children?.()}
</T.Group>
{/if}
