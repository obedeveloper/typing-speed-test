<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon-32x32.png';
	import { Passage, setPassage, setSettings, Settings } from '$lib/context.svelte';

	let { children, data } = $props();

	// svelte-ignore state_referenced_locally
	setSettings(
		new Settings({
			randomLevel: data.randomLevel,
			randomMode: data.randomMode
		})
	);

	// svelte-ignore state_referenced_locally
	setPassage(new Passage(data.randomPassage));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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
