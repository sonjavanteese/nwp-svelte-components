<script>
  import { getContext, onDestroy } from 'svelte';

  export let params;
  export let path = '';
  export let component = null;
  export let center = false;
  let props = {};

  const route = { path };
  const { routes, active, params: routeParams } = getContext('navaid');

  if (!routes) throw new Error('Route cannot work outside of a Router wrapper');
  routes.add(route);

  $: params = $routeParams;
  $: props = withoutLocal($$props);

  function withoutLocal({ params, path, component, center, ...rest }) {
    return rest;
  }

  onDestroy(() => routes.delete(route));
</script>

<style>
  .Site {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
.Site.center {
  align-items: center;
  justify-content: center;
}

.Site.center > * {
  align-self: center;
}
</style>

<section class="Site" class:center={center}>
{#if $active === route}
  {#if component}
    <svelte:component this={component} {...params} {...props} />
  {:else}
    <slot {params}></slot>
  {/if}
{/if}
</section>