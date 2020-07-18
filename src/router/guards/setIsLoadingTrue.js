import { storeSetRouterIsRouting } from 'utils/imports/store';

export default () => {
  storeSetRouterIsRouting(true);
  return true;
};
