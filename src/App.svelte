<script>
	import { Tabs, Tab, TabList, TabPanel } from "./nwp/svelte-tabs/";
	import Router from "./nwp/navaid/Router.svelte";
	import Route from "./nwp/navaid/Route.svelte";
	import Link from "./nwp/navaid/Link.svelte";
	import { AppWrapper, AppBar, AppDrawer } from "./nwp/appbar/";
	export let name;
	let isOpen = false;
	let isMenu = false;
	const sb = true;
	function toggleSb() {
    isOpen = !isOpen;
    }
    function toggleMenu() {
      isMenu = !isMenu;
    }
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	
</style>

<Router>
	<AppWrapper>
		<AppDrawer bind:isOpen />
		<AppBar {sb} bind:isOpen bind:isMenu >
			<Link href="/" class="appbar-item">Start</Link>
			<Link href="foo/sub1" class="appbar-item">Foo</Link>
		</AppBar>
		<Route path="/">
			<h2>Home</h2>
			<section name="Tabs">
				<Tabs>
					<TabList>
						<Tab>One</Tab>
						<Tab>Two</Tab>
						<Tab>Three</Tab>
					</TabList>

					<TabPanel>
						<h2>Panel One</h2>
					</TabPanel>

					<TabPanel>
						<h2>Panel Two</h2>
					</TabPanel>

					<TabPanel>
						<h2>Panel Three</h2>
					</TabPanel>
				</Tabs>
			</section>
		</Route>

		<!-- Supports navaid wildcards -->
		<Route path="/foo/*">
			<h2>Foo</h2>

			<!-- Supports subroutes with relative URLs (prefixed with /foo/ here) -->
			<Router>
				<nav>
					<Link href="sub1">Sub 1</Link>
					|
					<Link href="/sub2">Sub 2</Link>
				</nav>

				<Route path="/sub1">
					<h3>Sub Foo 1</h3>
					<main>
						<header>
							<h1>Hello {name}!</h1>
							<p>
								Visit the
								<a href="https://svelte.dev/tutorial">Svelte
									tutorial</a>
								to learn how to build Svelte apps.
							</p>
						</header>
					</main>
				</Route>

				<Route path="/sub2">
					<h3>Sub Foo 2</h3>
					<main>
						<header>
							<h1>Hello {name} .. again</h1>
							<p>
								Visit the
								<a href="https://svelte.dev/tutorial">Svelte
									tutorial</a>
								to learn how to build Svelte apps.
							</p>
						</header>
					</main>
				</Route>
			</Router>
		</Route>

		<!-- Supports 404 pages -->
		<Route>
			<h2>Page Not Found</h2>
		</Route>
	</AppWrapper>
</Router>
