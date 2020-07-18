import config from 'config/index';

describe('config/index', () => {
  it('standardLanguage is on supportedLanguages', () => {
    expect(config.app.locale.supportedLanguages).toContain(config.app.locale.standardLanguage);
  });
});
