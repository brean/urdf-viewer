<!-- view the robot, do not edit it -->
<script lang="ts">
  import { page } from '$app/state';

  import { onMount } from 'svelte';

  import { Canvas, T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import UrdfThree from '$lib/components/UrdfThree.svelte';
  import ThreeStage from '$lib/components/ThreeStage.svelte';

  import { UrdfParser } from '$lib/UrdfParser';

  import Grid from '$lib/components/Grid.svelte';
  import { radToEuler } from '$lib/helper';
  import { urdf_viewer_state } from "$lib/store/urdf_viewer_state.svelte";
  import { WebGLRenderer } from 'three';
  import type { IUrdfLink } from '$lib';

  let innerHeight = $state(0);
  let innerWidth = $state(0);

  let prefix = page.url.href;
  prefix = prefix.endsWith('/') ? prefix.substring(0, prefix.length-1) : prefix;
  const robot_name = "turtlebot3_burger";

  const filename = `turtlebot3_description/${robot_name}.xml`;
  const parser = new UrdfParser(`${prefix}/${filename}`, prefix);

  onMount(async () => {
    let promise = parser.load();
    let code = await promise;
    urdf_viewer_state.continuousJoints = {};
    urdf_viewer_state.revoluteJoints = {};
    urdf_viewer_state.robot = parser.fromString(code);
  });

  let onselectionchange = (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => {
    if (prev) {
      prev.highlight = false;
      prev = prev
    }
    if (next) {
      next.highlight = true;
      next = next
    }
  }

</script>
<svelte:window
  bind:innerHeight
  bind:innerWidth />

<main class="main-content">
  <div style:width={innerWidth - 250 + 'px'} style:height={innerHeight + 'px'}>
    <Canvas
    createRenderer={(canvas) => {
      return new WebGLRenderer({
        canvas,
        alpha: true,
        powerPreference: 'high-performance',
        logarithmicDepthBuffer: true
      })}}
      shadows>

      <T.PointLight color="white" intensity={.2} position={[0, 5, 0]} />
      <T.PointLight color="blue" intensity={0.5} position={[5, 5, 0]} />
      <T.PointLight color="yellow" intensity={0.5} position={[-5, -5, 0]} />

      <T.PerspectiveCamera
        makeDefault
        position={[.6, .6, .6]} fov={25}>
        <OrbitControls enableZoom={true} />
      </T.PerspectiveCamera>

      <ThreeStage preset_name="soft" />
      <Grid />

      {#if urdf_viewer_state.robot}
        <UrdfThree {onselectionchange} />
      {/if}
    </Canvas>
  </div>

  <!-- TODO: use snippet instead! -->
  <div class="joint_states">
    {#if urdf_viewer_state.continuousJoints}
      <h3>Continuous Joints</h3>
      {#each Object.entries(urdf_viewer_state.continuousJoints) as [name, joint]}
        <input type="range" id={name} min="0" max="360" step="1" value="180"
          oninput={(e) => {
            if (!e.target) {
              return
            }
            const euler = e.target.value;
            const rad = euler * Math.PI / 180 - Math.PI;
            joint.rotation = [
              rad*joint.axis_xyz[0] + joint.origin_rpy[0],
              rad*joint.axis_xyz[1] + joint.origin_rpy[1],
              rad*joint.axis_xyz[2] + joint.origin_rpy[2]];
          }}
        /><label for={name}>{name}</label>
      {/each}
    {/if}
    {#if urdf_viewer_state.revoluteJoints}
      <h3>Revolute Joints</h3>
      {#each Object.entries(urdf_viewer_state.revoluteJoints) as [name, joint]}
        <input type="range" id={name}
          min={radToEuler(joint.limit?.lower || 0)}
          max={radToEuler(joint.limit?.upper || 2*Math.PI)}
          step="1" value={radToEuler(joint.limit?.lower || 0)}
          oninput={(e) => {
            if (!e.target) {
              return
            }
            const euler = e.target.value;
            const rad = euler * Math.PI / 180 - Math.PI;
            joint.rotation = [
              rad*joint.axis_xyz[0] + joint.origin_rpy[0],
              rad*joint.axis_xyz[1] + joint.origin_rpy[1],
              rad*joint.axis_xyz[2] + joint.origin_rpy[2]];
          }}
        /><label for={name}>{name}</label>
      
      {/each}
    {/if}
    <button onclick={() => {
      // todo switch visual/collision
      urdf_viewer_state.display = urdf_viewer_state.display == 'visual' ? 'collision' : 'visual'
    }}>switch to {urdf_viewer_state.display == 'visual' ? 'collision' : 'visual'}</button>
  </div>
</main>

<style>
  .joint_states {
    position:absolute;
    right: 0;
    top: 0;
    width: 250px;
    height: 100vh;
    border-left: 1px solid black;
  }
</style>