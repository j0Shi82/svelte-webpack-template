import { currentLocale } from 'utils/imports/store';
import { routeLocaleDict } from 'utils/imports/data';
import { localeStandardLanguage } from 'utils/imports/config';

let localeStoreValue;

currentLocale.subscribe((value) => {
  localeStoreValue = value;
});

const getLocalizedRoute = (routeName, lang = localeStoreValue) => {
  let routePath = routeLocaleDict[lang][routeName];
  if (lang !== localeStandardLanguage) {
    routePath = `/${lang}${routePath}`;
  }
  return routePath;
};

export default getLocalizedRoute;
