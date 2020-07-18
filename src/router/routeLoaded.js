import setIsLoadingFalse from 'router/events/setIsLoadingFalse';
import { currentRouteName } from 'utils/imports/store';

export default (event) => {
  currentRouteName.set(event.detail.userData.routeName);
  setIsLoadingFalse();
};
