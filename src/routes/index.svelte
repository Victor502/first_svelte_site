<script>
	import Signin from "../components/Signin.svelte";
	import { username, isSignedIn } from "../store/store.js"
	console.log('here', $username)
	
</script>
<style>
	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

{#if !$isSignedIn}
<h1>Sign In</h1>
{:else}
<h1>Welcome {$username}</h1>
{/if}

<Signin />
