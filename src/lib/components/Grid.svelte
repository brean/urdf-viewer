<script lang="ts">
  import { useThrelte } from "@threlte/core";
  import { onDestroy } from "svelte";
  import { GridHelper } from "three";

  interface Props {
    position?: [x: number, y: number, z: number]
    size?: number
    divisions?: number
  }
  let {
    position = [0, 0, 0],
    size = 10,
    divisions = 10
  }: Props = $props();

  const { scene } = useThrelte();

  const gridHelper = new GridHelper(size, divisions);
	gridHelper.position.x = position[0];
  gridHelper.position.y = position[1];
  gridHelper.position.z = position[2];
	scene.add(gridHelper);

	onDestroy(() => {
		scene.remove(gridHelper)
	})
</script>
