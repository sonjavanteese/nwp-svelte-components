<style global>
  :global(.active) {
    font-weight: bold;
    text-decoration: none;
  }
  :global(#app) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  :global(#main) {
    flex: 1 1 auto;
    align-self: auto;
    overflow: hidden;
  }
  :global(html,
  body) {
    height: 100vh;
    width: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }
  :global(a,
  a:hover,
  a:active,
  a:focus) {
    text-decoration: none;
    outline: none;
  }

  :global(h1, h2, h3, h4, h5) {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
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
  text-decoration: none;
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
:global(.appbar-item > span) {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

</style>

<section id="app">
<slot></slot>
</section>
