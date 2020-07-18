import { storeTypeWritable } from 'utils/imports/svelte';

const store = {
  router: {
    isRouting: storeTypeWritable(false), // ongoing route change
    routeName: storeTypeWritable(null), // current route name because spa router only offers path
  },
};

export default store;
