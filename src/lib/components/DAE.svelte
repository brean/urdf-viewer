<script lang="ts">
  import { T, type AsyncWritable, useLoader } from '@threlte/core';
  import { Color, Mesh, Vector3, type EulerTuple } from 'three';
  import { ColladaLoader, type Collada } from 'three/examples/jsm/loaders/ColladaLoader';

  interface Props {
    filename: string
    color?: Color
    scale?: [x: number, y: number, z: number]
    position?: [x: number, y: number, z: number]
    rotation?: [x: number, y: number, z: number]
    onclick?: (event: Event) => void
    opacity: number
  }
  let {
    filename,
     // use pink as fallback color
    color = new Color('pink'),
    scale = [1, 1, 1],
    rotation = [0, 0, 0],
    position = [0, 0, 0],
    onclick = () => {},
    opacity = 1.0
  }: Props = $props();

  let sceneScale: [x: number, y: number, z: number] = $state([1, 1, 1]);
  let scenePosition: [x: number, y: number, z: number] = $state([0, 0, 0]);
  let sceneRotation: EulerTuple | undefined = $state([0, 0, 0]);
  let objs: Mesh[] = $state([]);
  const sceneUp: [x: number, y: number, z: number] = [Math.PI / 2, -Math.PI / 2, -Math.PI / 2];

  const loader = useLoader(ColladaLoader);

  let dae: AsyncWritable<Collada> = loader.load(filename);
  dae.subscribe((d: Collada | undefined) => {
    if (!d) {
      return;
    }
    let scene = d.scene;
    sceneScale = scene.scale.toArray();
    scenePosition = scene.position.toArray();
    sceneRotation = scene.rotation ? scene.rotation.toArray() : sceneRotation;

    let _objs: Mesh[] = []
    d.scene.traverse((obj) => {
      if (obj.type === 'Mesh') {
        _objs.push(obj as Mesh);
      }
    })
    objs = _objs;
  });
</script>

{#if objs.length > 0}
  {@html `<!-- include dae: ${filename} ${scale} -->`}
  <T.Group {scale} {position} {rotation} >
    <T.Group rotation={sceneUp}>
      <T.Group scale={sceneScale} position={scenePosition} rotation={sceneRotation}>
        {#each objs as child}
        <T.Mesh castShadow receiveShadow
          geometry={child.geometry}
          scale={child.scale ? child.scale.toArray() : [1, 1, 1]}
          position={child.position ? child.position.toArray() : [0, 0, 0]}
          material={child.material}
          {onclick} >
          {#if color}
            {#if opacity < 1.0}
              <T.MeshLambertMaterial {color} {opacity} transparent={true} />
            {:else}
              <T.MeshLambertMaterial {color} />
            {/if}
          {/if}
        </T.Mesh>
        {/each}
      </T.Group>
    </T.Group>
  </T.Group>
{/if}

