import config from 'config/index';

const { routingFadeDuration } = config.app.router;
const { standardLanguage, supportedLanguages } = config.app.locale;

export {
  routingFadeDuration,
  standardLanguage as localeStandardLanguage,
  supportedLanguages as localeSupportedLanguages,
};
