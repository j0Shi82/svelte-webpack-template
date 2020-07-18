import routeLocales from 'locale/dict/routes';
import config from 'config/index';

describe('locale/dict/routes', () => {
  it('routeLocales has routes for all languages', () => {
    expect(JSON.stringify(Object.keys(routeLocales).sort())).toEqual(JSON.stringify(config.app.locale.supportedLanguages.sort()));
  });

  it('all routes in routeLocales match across all languages', () => {
    expect(Object.keys(routeLocales).map((loc) => JSON.stringify(Object.keys(routeLocales[loc]).sort())).reduce((prev, cur) => {
      if (prev === cur) return cur;
      return false;
    })).not.toEqual(false);
  });
});
