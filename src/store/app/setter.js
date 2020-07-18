import appStore from 'store/app/index';

const setRouterIsRouting = (state) => {
  appStore.router.isRouting.set(state);
};

export default setRouterIsRouting;
