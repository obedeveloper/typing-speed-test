<script lang="ts">
	import '../../layout.css';
	import favicon from '$lib/assets/favicon-32x32.png';
	import Header from '../../Header.svelte';
	import { setGlobalContext } from '../../global-state.svelte.js';

	let { data } = $props();

	setGlobalContext({ level: (() => data.level)(), mode: (() => data.mode)() });
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Frontend Mentor | Typing Speed Test</title>
</svelte:head>

<Header></Header>
<main class="wrapper">
	<p>{data.text}</p>
</main>
