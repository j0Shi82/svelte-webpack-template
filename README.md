# svelte-webpack-template
My current and ever-evolving standard template when starting svelte apps. Readme is still a work in progress...

## Start project using this template

```
npm install -g degit
npx degit j0Shi82/svelte-webpack-template svelte-app 
```

## Current Features

- Babel: Build two bundles based on `@babel/preset-modules` for modern browser and `@babel/preset-env` for legacy browsers leveraging the module/nomodule pattern
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