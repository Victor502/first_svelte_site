<script>
	import Nav from '../components/Nav.svelte';
	import {isSignedIn} from '../store/store.js'

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
{#if $isSignedIn}
<Nav {segment}/>
{/if}

<main>
	<slot></slot>
</main>