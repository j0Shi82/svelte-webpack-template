import { registerLocaleDict, initLocalization } from 'utils/imports/core';
import { localeSupportedLanguages, localeStandardLanguage } from 'utils/imports/config';

export default () => {
  localeSupportedLanguages.forEach((lang) => {
    // need to disable prefer-template here because of a bug in babel
    // https://github.com/babel/babel/issues/11844
    // eslint-disable-next-line prefer-template
    registerLocaleDict(lang, () => import('locale/dict/' + lang + '.json'));
  });

  initLocalization({
    fallbackLocale: 'en',
    initialLocale: localeStandardLanguage,
  });
};
