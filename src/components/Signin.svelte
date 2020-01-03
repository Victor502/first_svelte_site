<script>
    let count = 0;
    $: doubled = count * 2
    function handleClick() {
	count += 1;
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

<form>
    Name: <input type="text" />
    Password: <input type="text" />
</form>
<button on:click={handleClick}> Sign In</button>
{count} <p>and doubled it</p> {doubled}