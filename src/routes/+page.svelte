<script lang="ts">
	import { getPassage } from '$lib/context.svelte';

	import HeaderSec1 from './HeaderSec1.svelte';
	import HeaderSec2 from './HeaderSec2.svelte';

	let testStarted = $state(false);
</script>

<svelte:head>
	<title>Typing speed test</title>
</svelte:head>

<header class="container flex flex-col gap-4 py-3 sm:py-6">
	<HeaderSec1></HeaderSec1>
	<HeaderSec2></HeaderSec2>
	<hr class="border border-neutral-500" />
</header>

<main class="container grid place-content-center">
	<div class={['text-neutral-400', !testStarted && 'blur-sm']}>
		{getPassage().value}
	</div>
	{#if !testStarted}
		<div class="z-10 grid place-content-center gap-2 font-medium">
			<button
				onclick={() => (testStarted = true)}
				class="mx-auto w-fit cursor-pointer rounded bg-blue-600 px-6 py-2"
			>
				Start Typing Test
			</button>
			<p>Or click the text and start typing</p>
		</div>
	{/if}
</main>

<style>
	main > * {
		grid-area: 1/1;
	}
</style>
