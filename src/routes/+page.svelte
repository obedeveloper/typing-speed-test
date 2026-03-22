<script lang="ts">
	import { getPassage } from '$lib/context.svelte';

	import HeaderSec1 from './HeaderSec1.svelte';
	import HeaderSec2 from './HeaderSec2.svelte';
</script>

<svelte:head>
	<title>Typing speed test</title>
</svelte:head>

<header class="container flex flex-col gap-4 py-3 sm:py-6">
	<HeaderSec1></HeaderSec1>
	<HeaderSec2></HeaderSec2>
	<hr class="border border-neutral-500" />
</header>

<main class="container">
	{getPassage().value}
</main>
