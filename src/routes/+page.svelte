<script lang="ts">
	import { getPassage } from '$lib/context.svelte';
	import { testData } from '$lib/data.svelte';
	import HeaderSec1 from './HeaderSec1.svelte';
	import HeaderSec2 from './HeaderSec2.svelte';
	import restartIcon from '$lib/assets/icon-restart.svg';

	const passage = $derived(getPassage().value);
	const userInput = $derived(testData.userInput);
	let textArea: HTMLTextAreaElement;

	const totalWords = $derived(userInput.length / 5);
	const wpm = $derived.by(getWPM);

	$effect(() => {
		testData.accuracy = getAccuracy();
		testData.wpm = wpm;
	});

	function getWPM() {
		if (testData.timerInSecs === 0 || totalWords === 0) {
			return 0;
		}

		const timeInMins = testData.timerInSecs / 60;
		const wpm = totalWords / timeInMins;

		console.log({ wpm, totalWords, timeInMins });

		return Math.floor(wpm);
	}

	function getAccuracy() {
		const { length } = userInput;
		let accurateChars = 0;

		if (length === 0) {
			return 100;
		}

		userInput.split('').forEach((char, i) => {
			if (char === passage[i]) {
				accurateChars++;
			}
		});

		return (accurateChars / length) * 100;
	}
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
	<div
		class={[
			'stack grid place-content-center text-lg text-neutral-400',
			!testData.testStarted && 'blur-sm'
		]}
	>
		<textarea
			bind:this={textArea}
			bind:value={
				() => testData.userInput,
				(v) => {
					if (v.length <= passage.length) {
						testData.userInput = v;
					}
				}
			}
			class="opacity-0"
		></textarea>
		<p>
			{#each passage.split('') as char, i (`${i}-${char}`)}
				<span
					class={[
						char === userInput[i] && 'text-green-500',
						userInput.length > i && char !== userInput[i] && 'text-red-500 underline',
						i === userInput.length && 'bg-neutral-500/40'
					]}>{char}</span
				>
			{/each}
		</p>
	</div>
	{#if !testData.testStarted}
		<div class="z-10 grid place-content-center gap-2 font-medium">
			<button
				onclick={() => {
					testData.testStarted = true;
					textArea.focus();
				}}
				class="mx-auto w-fit cursor-pointer rounded bg-blue-600 px-6 py-2"
			>
				Start Typing Test
			</button>
			<p>Or click the text and start typing</p>
		</div>
	{/if}
</main>

{#if testData.testStarted}
	<div class="container mbs-5">
		<hr class="border border-neutral-400" />
		<button
			onclick={() => testData.restart()}
			class="mx-auto my-4 flex cursor-pointer gap-2 rounded-lg bg-neutral-500/30 px-4 py-2"
		>
			Restart Test <img src={restartIcon} alt="" />
		</button>
	</div>
{/if}

<style>
	:is(main, .stack) > * {
		grid-area: 1/1;
	}
</style>
