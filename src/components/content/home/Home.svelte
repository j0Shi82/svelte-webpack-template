<script>
import { svelteLifecycleOnDestroy } from 'utils/imports/svelte';
import { localize, routerPush, getLocalizedRoute } from 'utils/imports/core';
import { currentLocale, currentRouteName } from 'utils/imports/store';

// re-route to localized url on lang change
const localeUnsub = currentLocale.subscribe(() => {
  // to prevent re-routing to default routeName store value, check whether a route name has been set already
  // on page load routeName is still null
  if ($currentRouteName !== null) {
    routerPush(getLocalizedRoute($currentRouteName));
  }
});

svelteLifecycleOnDestroy(() => {
  localeUnsub();
});
</script>

<div>{$localize('test')}</div>
<button on:click="{() => { currentLocale.set('en'); }}">EN</button>
<button on:click="{() => { currentLocale.set('de'); }}">DE</button>