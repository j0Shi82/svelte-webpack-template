# svelte-webpack-template
My current and ever-evolving standard template when starting svelte apps. Readme is still a work in progress...

## Current Features

- Babel: Uses `@babel/preset-modules`
- ESLint: extends `airbnb-base`
- Jest: Put tests in `__tests__` folders
- PostCSS:
  - Autoprefixer
  - Discard Duplicates
- Webpack
  - serve static assets from `public`
  - bundle into `dist`
  - build index.html from `index.template.html`

## Missing Features?

- SSR

## Packages and Usage

### svelte-i18n

- Set languages in `src/config/index`
- Add dicts to `locale/dict`
- Add localized routes to `locale/dict/routes`

```js
import { localize, routerPush, getLocalizedRoute } from 'utils/imports/core';

/// localize
$localize(key);

/// route
routerPush(getLocalizedRoute(routeName));
```

### svelte-spa-router

- Define routes in `router/baseRoutes`
- Define route guards in `router/utils/getGuards`