<script>
  import { clickOutside } from "./clickOutside.js";
  export let isOpen = false;
  function handleClickOutside() {
    if (isOpen) {
      isOpen = false;
    }
  }
</script>

<style>
    :root {    
    --sidebar-hover-bg: #ddd;
    --sidebar-hover-color: #111;
    --sidebar-bg: #f2f2f2;
    --sidebar-color: #333;
    --sidebar-link-bg: transparent;
    --sidebar-link-color: #333;
    --sidebar-active-bg: #ddd;
    --sidebar-active-color: #555;
    --sidebar-padding: 0.5rem 0.5rem;
  }
  :global(.sblink) {
    display: flex;
    justify-content: flex-start;
    border-radius: 0;
    background: var(--sidebar-link-bg);
    color: var(--sidebar-link-color);
    outline: none;
    border: none;
    cursor: pointer;
    padding: var(--sidebar-padding);
    margin: 0;
    border-radius: 0;
  }  
  :global(.sblink.active) {
    background: var(--sidebar-active-bg);
    color: var(--sidebar-active-color);
    box-shadow: inset -4px 0px 2px 0px rgba(51, 51, 51, 0.2);
  }
  :global(.sblink:has(svg)) {
    padding-right: 0;
    padding-left: 0;
  }
  :global(.sblink svg) {
    color: var(--sidebar-color);
  }
  :global(.sblink>div) {
    flex: 1 1 auto;
    align-self: center;
    padding: 0 0.5rem;
  }
  .aside {
    z-index: 200;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    width: 280px;
    max-width: 100%;
    height: 100%;
    background: #f2f2f2;
    left: -280px;
    transition: left 0.3s ease-in-out;
  }
  .aside {
    -webkit-box-shadow: inset -4px 0px 2px 0px rgba(51, 51, 51, 0.2);
    -moz-box-shadow: inset -4px 0px 2px 0px rgba(51, 51, 51, 0.2);
    box-shadow: inset -4px 0px 2px 0px rgba(51, 51, 51, 0.2);
  }

  .aside.open {
    left: 0;
  }
  .overlay {
    display: none;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 198;
    transition: background-color 1000ms linear;
  }
  .overlay.open {
    display: block;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .aside section {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
  .aside article {
    flex: 1;
  }
</style>

<!-- markup (zero or more items) goes here -->

<aside
  class="aside"
  class:open={isOpen}
  use:clickOutside
  on:clickOutside={handleClickOutside}>
  <section>
    <article>
      <slot />
    </article>
    <footer />
  </section>
</aside>
<div class="overlay" class:open={isOpen} />
