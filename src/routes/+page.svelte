<!-- view the robot, do not edit it -->
<script lang="ts">
  import { page } from '$app/state';

  import { onMount } from 'svelte';

  import { Canvas, T } from '@threlte/core';
  import { Gizmo, OrbitControls } from '@threlte/extras';
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
    
    const robot = parser.fromString(code);
    const continuousJoints: {[name: string]: number;} = {};
    const revoluteJoints: {[name: string]: number;} = {};
    for (let i = 0; i < robot.joints.length; i++) {
      const joint = robot.joints[i];
      if (joint.type == "continuous" && joint.name) {
        continuousJoints[joint.name] = i;
      } else if (joint.type == "revolute" && joint.name) {
        revoluteJoints[joint.name] = i;
      }
    }
    urdf_viewer_state.continuousJoints = continuousJoints;
    urdf_viewer_state.revoluteJoints = revoluteJoints;
    urdf_viewer_state.robot = robot;
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
        <OrbitControls enableZoom={true}>
          <Gizmo />
        </OrbitControls>
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
    {#if urdf_viewer_state.robot && urdf_viewer_state.continuousJoints}
      <h3>Continuous Joints</h3>
      {#each Object.entries(urdf_viewer_state.continuousJoints) as [name, nr]}
        <input type="range" id={name} min="0" max="360" step="1" value="180"
          oninput={(e) => {
            if (!e.target || !urdf_viewer_state.robot) {
              return
            }
            const joint = urdf_viewer_state.robot.joints[nr]
            const euler = e.target.value;
            const rad = euler * Math.PI / 180 - Math.PI;
            joint.rotation = [
              rad*joint.axis_xyz[0] + joint.origin_rpy[0],
              rad*joint.axis_xyz[1] + joint.origin_rpy[1],
              rad*joint.axis_xyz[2] + joint.origin_rpy[2]];
            //console.log(joint.rotation);
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
              rad * joint.axis_xyz[0] + joint.origin_rpy[0],
              rad * joint.axis_xyz[1] + joint.origin_rpy[1],
              rad * joint.axis_xyz[2] + joint.origin_rpy[2]];
          }}
        /><label for={name}>{name}</label>
      
      {/each}
    {/if}
    <hr />
    <input
      type="range"
      oninput={() => {
        urdf_viewer_state.visualOpacity = Number(urdf_viewer_state.visualOpacity);
      }}
      min={0}
      max={1}
      step={0.1}
      bind:value={urdf_viewer_state.visualOpacity}
      id="_visual_opacity" /><br />
    <label for="_visual_opacity">Visual Opacity</label>

    <input
      type="range"
      oninput={() => {
        urdf_viewer_state.collisionOpacity = Number(urdf_viewer_state.collisionOpacity);
      }}
      min={0}
      max={1}
      step={0.1}
      bind:value={urdf_viewer_state.collisionOpacity}
      id="_collision_opacity" /><br />
    <label for="_collision_opacity">Collision Opacity</label>
    <hr />

    <input
      type="checkbox"
      id="_urdf_visual"
      bind:checked={urdf_viewer_state.visual}>
    <label for="_urdf_visual">Visual</label>
    <br />

    <input
      type="checkbox"
      id="_urdf_collision"
      bind:checked={urdf_viewer_state.collision}>
    <label for="_urdf_collision">Collision</label><br />
    <input
      type="checkbox"
      id="_urdf_links"
      bind:checked={urdf_viewer_state.links}>
    <label for="_urdf_links">Links</label><br />
    <input
      type="checkbox"
      id="_urdf_linknames"
      bind:checked={urdf_viewer_state.linkNames}>
    <label for="_urdf_linknames">Link names</label><br />
    <input
      type="checkbox"
      id="_urdf_joints"
      bind:checked={urdf_viewer_state.joints}>
    <label for="_urdf_joints">Joints</label><br />
    <input
      type="checkbox"
      id="_urdf_jointnames"
      bind:checked={urdf_viewer_state.jointNames}>
    <label for="_urdf_jointnames">Joint names</label><br />
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