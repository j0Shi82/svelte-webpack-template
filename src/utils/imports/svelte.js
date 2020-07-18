import {
  onDestroy, onMount, createEventDispatcher, afterUpdate, tick,
} from 'svelte';
import { writable } from 'svelte/store';
import {
  fade, slide, fly, scale,
} from 'svelte/transition';
import { backOut } from 'svelte/easing';

export {
  onDestroy as svelteLifecycleOnDestroy,
  onMount as svelteLifecycleOnMount,
  afterUpdate as svelteLifecycleAfterUpdate,
  fade as svelteTransitionFade,
  scale as svelteTransitionScale,
  slide as svelteTransitionSlide,
  backOut as svelteEasingBackOut,
  fly as svelteTransitionFly,
  writable as storeTypeWritable,
  createEventDispatcher as svelteCreateEventDispatcher,
  tick as svelteTick,
};
