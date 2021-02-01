<script>
import ShowResults from "./ShowResults.svelte";
$:birthDate = ''
let birthDateHeader = '';
$: show = false
const showEvents =(e)=>{
	show = true
	birthDateHeader = new Date(birthDate).toDateString()
	
}
</script>
<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
	<title>??</title>
</svelte:head>
<main>
	<div class="container">
		<h3 class='text-center'>??</h3>
		<div class="container">
			<div class="input-group">
				<label class='m-4' for=""> 
					{birthDateHeader ? `Your birthday ${birthDateHeader}`:'Enter your birthday'} 
				</label>
				<input bind:value={birthDate} type="date">
				<button on:click={showEvents} class='btn btn-primary'>See</button>
			</div>
			<div class="container">
				{#if show}
					<ShowResults birthDate={birthDate}/>
				{/if}
			</div>
		</div>
	</div>
</main>

<style>
	.input-group{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
	}
</style>