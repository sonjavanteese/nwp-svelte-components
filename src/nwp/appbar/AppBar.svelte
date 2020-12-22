<script>
    export let isOpen = false;
    export let isMenu = false;
    export let sb = false;
    export let name = "Nwp-App";

    const burgerIcon = `<svg style="width: 24px; height: 24px;" viewBox="0 0 24 24"><path fill="currentColor" d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z" /></svg>`;
    const burgerIconAct = `<svg style="width: 24px; height: 24px;" viewBox="0 0 24 24"><path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`;
    const menuIcon = `<svg style="width: 24px; height: 24px;" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>`;
    const menuIconAct = `<svg style="width: 24px; height: 24px;" viewBox="0 0 24 24"><path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`;

    function toggleSb() {
    isOpen = !isOpen;
    }
    function toggleMenu() {
      isMenu = !isMenu;
    }
</script>

<style>
      :root {
        --appbar-color: #f2f2f2;
        --appbar-hover-color: #ddd;
        --appbar-bg: #333;
        --appbar-hover-bg: #555;
        --appbar-height: 56px;
    }
      :global(.appbar-item) {
        display: grid;
        justify-content: center;
        align-content: center;
        height: var(--appbar-height);
        min-width: var(--appbar-height);
        border-radius: 0;
        background: transparent;
        color: var(--appbar-color);
        outline: none;
        border: none;
        cursor: pointer;
        padding-right: 0.1rem;
        padding-left: 0.1rem;
        margin: 0;
      }
      :global(.appbar-item.active) {
        color: var(--appbar-hover-color);
        background: var(--appbar-hover-bg);
      }
      :global(.appbar-item:hover) {
        /* color: var(--appbar-hover-color);
        background: var(--appbar-hover-bg); */
        outline: none;
        border: none;
      }
      :global(.appbar-item:has(svg)) {
        padding-right: 0;
        padding-left: 0;
      }
      .appbar svg {
        width: 24px;
        height: 24px;
        margin: 0;
        color: var(--appbar-color);
      }
      nav.appbar {
        display: flex;
        flex-direction: row;
        background-color: var(--appbar-bg);
        color: var(--appbar-color);
        min-height: var(--appbar-height);
      }
      nav.appbar > * {
        align-self: center;
        margin: 0;
      }
      nav.appbar > .titel {
        flex: 1 1 auto;
        padding: 0 0.5rem;
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--appbar-color);
        align-self: center;
      }


</style>


<nav class="appbar">
  {#if sb}
	<button class="appbar-item" on:click={toggleSb}>
    {#if isOpen}
    {@html burgerIconAct}
    {:else}
        {@html burgerIcon}
    {/if}
  </button>
{/if}
  <div class="titel">
    {name}
  </div>
  <slot></slot>
  <button class="appbar-item" on:click={toggleMenu}>
    {#if isMenu}
    {@html menuIconAct}
    {:else}
        {@html menuIcon}
    {/if}
  </button>
</nav>