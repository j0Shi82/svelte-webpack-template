import { ChunkGenerator } from 'svelte-spa-chunk';
import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte';

const applyCodeSplittingToRoute = ChunkGenerator(ChunkComponent);

// route components, loaded async thanks to svelte-spa-chunk
const HomeRoute = applyCodeSplittingToRoute(() => import('components/content/home/Home.svelte'));
const AnotherRoute = applyCodeSplittingToRoute(() => import('components/content/home/Home.svelte'));

export {
  HomeRoute, AnotherRoute,
};
