import { writable } from 'svelte/store';
import type UrdfJoint from '$lib/components/UrdfJoint.svelte';

const { subscribe, set, update } = writable<{[name: string]: UrdfJoint}>(undefined);

const reset = () => {
  set({});
};

export default {
  subscribe,
  set,
  update,
  reset
}