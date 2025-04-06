import { Color } from "three";
import { urdf_viewer_state } from "./store/urdf_viewer_state.svelte";

export function xyzFromString(child: Element): [x: number, y: number, z: number] | undefined {
  const arr = numberStringToArray(child, 'xyz');
  if (!arr || arr.length != 3) {
    return
  }
  return arr as [x: number, y: number, z: number];
}

export function rpyFromString(child: Element): [roll: number, pitch: number, yaw: number] | undefined {
  const arr = numberStringToArray(child, 'rpy');
  if (!arr || arr.length != 3) {
    return
  }
  return arr as [roll: number, pitch: number, yaw: number];
}

export function rgbaFromString(child: Element): [r: number, g: number, b: number, a: number] | undefined {
  const arr = numberStringToArray(child, 'rgba');
  if (!arr || arr.length != 4) {
    return
  }
  return arr as [r: number, g: number, b: number, a: number];
}

export function numberStringToArray(
    child: Element, name: string = 'xyz'): number[] | undefined {
  // parse a list of values from a string 
  // (like "1.0 2.2 3.0" into an array like [1, 2.2, 3])
  // used in URDF for position, orientation an color values
  if (child.hasAttribute(name)) {
    const xyzStr = child.getAttribute(name)?.split(' ')
    if (xyzStr) {
      const arr = []
      for (const nr of xyzStr) {
        arr.push(parseFloat(nr));
      }
      return arr;
    }
  }
}

export function radToEuler(rad: number): number {
  return rad * 180 / Math.PI
}

export function numberArrayToColor(col?: number[]): Color {
  if (!col) {
    return new Color('white')
  }
  return new Color(col[0], col[1], col[2]);
}

export function textScale(height: number): number {
  return Math.max(
    (urdf_viewer_state.zoom / urdf_viewer_state.initialZoom) * height,
    height);
}