import { writable } from 'svelte/store';
import type { IUrdfJoint } from '$lib/models/IUrdfJoint';

const { subscribe, set, update } = writable<{[name: string]: IUrdfJoint}>({});

const reset = () => {
  set({});
};

export default {
  subscribe,
  set,
  update,
  reset
}