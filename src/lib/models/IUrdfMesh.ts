export default interface IUrdfMesh {
  filename: string;
  type: 'stl' | 'fbx' | 'obj' | 'dae';
  scale: [x: number, y: number, z: number];
}