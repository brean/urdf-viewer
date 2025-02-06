<script lang="ts">
  import { T } from "@threlte/core";
  import { ContactShadows } from "@threlte/extras";

  // based on 
  // https://github.com/pmndrs/drei/blob/master/src/core/Stage.tsx
  interface Props {
    intensity?: number
    radius?: number
    shadows?: boolean
    preset_name?: 'rembrandt' | 'portrait' | 'upfront' | 'soft'
    shadowBias?: number
    normalBias?: number
    shadowSize?: number
    height?: number
    shadowOffset?: number
  }

  let {
    intensity = 0.5,
    radius = 1.0,
    shadows = true,
    preset_name = 'rembrandt',
    shadowBias = -0.0001,
    normalBias = 0,
    shadowSize = 256,
    height = 1.0,
    shadowOffset = 1.0
  }: Props = $props();

  const presets = {
    rembrandt: {
      main: [1, 2, 1],
      fill: [-2, -0.5, -2],
    },
    portrait: {
      main: [-1, 2, 0.5],
      fill: [-1, 0.5, -1.5],
    },
    upfront: {
      main: [0, 2, 1],
      fill: [-1, 0.5, -1.5],
    },
    soft: {
      main: [-2, 4, 4],
      fill: [-1, 0.5, -1.5],
    },
  }
  const config = presets[preset_name];

</script>

<T.AmbientLight intensity={intensity / 3} />
<T.SpotLight
  penumbra={1}
  position={[
    config.main[0] * radius,
    config.main[1] * radius,
    config.main[2] * radius]}
  intensity={intensity * 2}
  castShadow={shadows}
  shadow-bias={shadowBias}
  shadow-normalBias={normalBias}
  shadow-mapSize={shadowSize}
/>
<T.PointLight 
  position={[
    config.fill[0] * radius,
    config.fill[1] * radius,
    config.fill[2] * radius]}
  intensity={intensity}
/>

<T.Group position={[0, -height / 2 - shadowOffset / 2, 0]}>
  {#if shadows}
    <ContactShadows 
      scale={radius * 4} far={radius} blur={2} />
  {/if}
</T.Group>