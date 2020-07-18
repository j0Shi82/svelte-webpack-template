// guards
import setIsLoadingTrue from 'router/guards/setIsLoadingTrue';
import setLocale from 'router/guards/setLocale';

const guardConfig = [
  { test: () => true, guards: [setLocale, setIsLoadingTrue] },
];

export default (routeName) => {
  const guards = [];
  guardConfig.forEach((config) => {
    if (config.test(routeName)) guards.push(...config.guards);
  });
  return guards;
};
