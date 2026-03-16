<script lang="ts">
	import './layout.css';
	import HeaderSec1 from './HeaderSec1.svelte';
	import HeaderSec2 from './HeaderSec2.svelte';
	import favicon from '$lib/assets/favicon-32x32.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="container flex flex-col gap-4 py-3 sm:py-6">
	<HeaderSec1></HeaderSec1>
	<HeaderSec2></HeaderSec2>
	<hr class="border border-neutral-500" />
</header>

{@render children()}

<footer class="attribution container my-6">
	Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. Coded by
	<a href="https://github.com/obedeveloper">NIYOMUGISHA Obed</a>.
</footer>

<style>
	@font-face {
		font-family: 'Sora';
		src: url('$lib/fonts/Sora-VariableFont_wght.ttf');
	}
</style>
