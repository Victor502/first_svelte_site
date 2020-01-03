<script>
    import {isSignedIn, username} from '../store/store.js'

    function handleClick() {
        console.log('here')
        isSignedIn.set(true)
    }
    function handleClickOut() {
        isSignedIn.set(false)
    }
   
</script>
<style>
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    max-width: 250px
}
button {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}
</style>
{#if !$isSignedIn}
<form action >
    Name: <input type="text" />
    Password: <input type="text" />
</form>
{/if}
{#if !$isSignedIn}
<button on:click={handleClick}> Sign In</button>
{:else}
<button on:click={handleClickOut}> Sign out</button>
{/if}