<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="favicon-32x32.png" />
</svelte:head>

{@render children()}

<div class="attribution">
	Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. Coded by
	<a href="https://github.com/obedeveloper">NIYOMUGISHA Obed</a>.
</div>
