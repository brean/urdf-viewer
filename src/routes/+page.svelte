<!-- view the robot, do not edit it -->
<script lang="ts">
  import { page } from '$app/stores';

  import { onMount } from 'svelte';

  import { Canvas, T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import UrdfThree from '$lib/components/UrdfThree.svelte';
  import ThreeStage from '$lib/components/ThreeStage.svelte';

  import { UrdfParser } from '$lib/UrdfParser';

  import robot_urdf from '$lib/store/robot_urdf';
  import Grid from '$lib/components/Grid.svelte';
  import continuous_joints from '$lib/store/continuous_joints';

  let innerHeight = 0;
  let innerWidth = 0;

  let prefix = $page.url.href;
  prefix = prefix.endsWith('/') ? prefix.substring(0, prefix.length-1) : prefix;
  const robot_name = "turtlebot3_burger";

  const filename = `turtlebot3_description/${robot_name}.xml`;
  const parser = new UrdfParser(`${prefix}/${filename}`, prefix);

  onMount(async () => {
    let promise = parser.load();
    let code = await promise;
    $continuous_joints = {}
    $robot_urdf = parser.fromString(code);
  });
</script>
<svelte:window
  bind:innerHeight={innerHeight}
  bind:innerWidth={innerWidth} />

<main class="main-content">
  <Canvas shadows size={{height: innerHeight, width: innerWidth - 250}}
  rendererParameters={{logarithmicDepthBuffer: true}}>

    <T.PointLight color="white" intensity={.2} position={[0, 5, 0]} />
    <T.PointLight color="blue" intensity={0.5} position={[5, 5, 0]} />
    <T.PointLight color="yellow" intensity={0.5} position={[-5, -5, 0]} />

    <T.PerspectiveCamera makeDefault let:ref={camera}
      position={[.6, .6, .6]} fov={25}>
      <OrbitControls enableZoom={true} />
    </T.PerspectiveCamera>

    <ThreeStage preset_name="soft" />
    <Grid />

    {#if $robot_urdf}
      <UrdfThree />
    {/if}
  </Canvas>

  <div class="joint_states">
    {#each Object.entries($continuous_joints) as [name, joint]}
      <input type="range" id={name} min="0" max="360" step="1" value="180"
        on:change={(e) => {
          const euler = e.target.value;
          const rad = euler * Math.PI / 180 - Math.PI;
          console.log(joint.origin_rpy)
          joint.origin_rpy[2] = rad;
          $robot_urdf = $robot_urdf;
        }}
      /><label for={name}>{name}</label>
    {/each}
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