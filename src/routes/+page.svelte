<!-- view the robot, do not edit it -->
<script lang="ts">
  import { page } from '$app/state';

  import { onMount } from 'svelte';

  import { Canvas, T } from '@threlte/core';
  import { Gizmo, Grid, OrbitControls } from '@threlte/extras';
  import UrdfThree from '$lib/components/UrdfThree.svelte';
  import ThreeStage from '$lib/components/ThreeStage.svelte';

  import { UrdfParser } from '$lib/UrdfParser';

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

  const jointvalues: {[name: string]: number} = $state({});

  let onselectionchange = (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => {

  }

</script>
<svelte:window
  bind:innerHeight
  bind:innerWidth />

<main class="main-content">
  <div 
    style:width={innerWidth - 250 + 'px'}
    style:height={innerHeight + 'px'}
    style:background-color={urdf_viewer_state.backgroundColor}>
    <Canvas
    createRenderer={(canvas) => {
      return new WebGLRenderer({
        canvas,
        alpha: true,
        powerPreference: 'high-performance',
        logarithmicDepthBuffer: true
      })}}
      shadows>

      <T.PerspectiveCamera
        makeDefault
        up={[0, 0, 1]}
        forward={[1, 0, 0]}
        eulerOrder={"XZY"}
        position={[.6, .6, .6]} fov={25}>
        <OrbitControls
          enableZoom>
          <Gizmo />
        </OrbitControls>
      </T.PerspectiveCamera>

      
      <T.Group rotation={[-Math.PI/2, 0, 0]}>
        <T.HemisphereLight
          skycolor={0xB1E1FF}
          groundColor={0xB97A20}
          intensity={.2}
        ></T.HemisphereLight>

        <Grid cellSize={0.1} />
      </T.Group>

      <ThreeStage preset_name="soft" />

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
        <input type="range" id={name} min="0" max="360" step="1"
          bind:value={jointvalues[name]}
          oninput={(e) => {
            if (!e.target || !urdf_viewer_state.robot) {
              return
            }
            const joint = urdf_viewer_state.robot.joints[nr]
            const euler = jointvalues[name];
            const rad = euler * Math.PI / 180 - Math.PI;
            joint.rotation = [
              rad*joint.axis_xyz[0] + joint.origin_rpy[0],
              rad*joint.axis_xyz[1] + joint.origin_rpy[1],
              rad*joint.axis_xyz[2] + joint.origin_rpy[2]];
            //console.log(joint.rotation);
          }}
        /><label for={name}>{name}</label>
      {/each}
      <br />
      <button onclick={() => {
        console.log(urdf_viewer_state.continuousJoints)
        for (let nr of Object.values(urdf_viewer_state.continuousJoints)) {
          const joint = urdf_viewer_state.robot?.joints[nr]
          console.log(joint)
          if (!joint || !urdf_viewer_state.robot) {
            continue
          }
          joint.rotation = [
              joint.origin_rpy[0],
              joint.origin_rpy[1],
              joint.origin_rpy[2]]
          jointvalues[joint.name] = 180;
        }
        
      }}>reset</button>
    {/if}
    {#if urdf_viewer_state.revoluteJoints}
      <h3>Revolute Joints</h3>
      {#each Object.entries(urdf_viewer_state.revoluteJoints) as [name, nr]}
        <input type="range" id={name}
          min={
            radToEuler(urdf_viewer_state.robot?.joints[nr].limit?.lower || 0)}
          max={
            radToEuler(urdf_viewer_state.robot?.joints[nr].limit?.upper || 2*Math.PI)}
          step="1" value={
            radToEuler(urdf_viewer_state.robot?.joints[nr].limit?.lower || 0)}
          oninput={(e) => {
            if (!e.target || !urdf_viewer_state.robot) {
              return
            }
            const joint = urdf_viewer_state.robot.joints[nr]
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
      min={0.1}
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
      min={0.1}
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
    <!-- colors -->
    <input
      id="_urdf_jointcolor"
      bind:value={urdf_viewer_state.jointColor}
      type="color" />
    <label for="_urdf_jointcolor">Joint color</label><br />
    
    <input
      id="_urdf_linkcolor"
      bind:value={urdf_viewer_state.linkColor}
      type="color" />
    <label for="_urdf_linkcolor">Link color</label><br />
    
    <input
      id="_urdf_jointindicolor"
      bind:value={urdf_viewer_state.jointIndicatorColor}
      type="color" />
    <label for="_urdf_jointindicolor">Joint indicator color</label><br />

    <input
      id="_urdf_highlightcolor"
      bind:value={urdf_viewer_state.highlightColor}
      type="color" />
    <label for="_urdf_highlightcolor">Highlight color</label><br />

    <input
      id="_urdf_collisioncolor"
      bind:value={urdf_viewer_state.collisionColor}
      type="color" />
    <label for="_urdf_collisioncolor">Collision color</label><br />

    <input
      id="_urdf_bgcolor"
      bind:value={urdf_viewer_state.backgroundColor}
      type="color" />
    <label for="_urdf_bgcolor">Background color</label><br />

    <br />
    Selected:<br />
    {#if urdf_viewer_state.selectedJoint}
      joint: {urdf_viewer_state.selectedJoint.name}<br />
      origin: {urdf_viewer_state.selectedJoint.origin_xyz}
    {/if}
    {#if urdf_viewer_state.selectedLink}
    link: {urdf_viewer_state.selectedLink.name}<br />
    visuals: <br />
    {#if urdf_viewer_state.selectedLink.visual}
      {#each urdf_viewer_state.selectedLink.visual as visual}
      &nbsp;-&nbsp;origin: {visual.origin_xyz} ({visual.type}) <br />
      {/each}
    {/if}
    collisions: <br />
    {#if urdf_viewer_state.selectedLink.collision}
      {#each urdf_viewer_state.selectedLink.collision as visual}
      &nbsp;-&nbsp;origin: {visual.origin_xyz} ({visual.type}) <br />
      {/each}
    
    {/if}
    {/if}
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