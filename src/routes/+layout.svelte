<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon-32x32.png';
	import Header from './Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Frontend Mentor | Typing Speed Test</title>
</svelte:head>

<Header></Header>
<main class="wrapper">
	{@render children()}
</main>
