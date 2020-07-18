<script>
import {
  isLocalizationLoading, setupLocalization, RouterComponent, routes, routerOnRouteLoaded,
} from 'utils/imports/core';

setupLocalization();
</script>
    
{#if !$isLocalizationLoading}
<main class="main-content" id="main-content">
    <RouterComponent {routes} on:routeLoaded="{routerOnRouteLoaded}" />
</main>
{/if}