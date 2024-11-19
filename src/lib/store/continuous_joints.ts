import type { IUrdfJoint } from '$lib/models/IUrdfJoint';
import { writable } from 'svelte/store';

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