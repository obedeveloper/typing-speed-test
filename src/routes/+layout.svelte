<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon-32x32.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Frontend Mentor | Typing Speed Test</title>
</svelte:head>

{@render children()}
