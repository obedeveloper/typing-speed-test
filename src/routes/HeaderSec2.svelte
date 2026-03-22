<script lang="ts">
	import { getPassage, getSettings } from '$lib/context.svelte';
	import Select from './Select.svelte';
	import passagesData from '$lib/data.json';
	import { getRandomItem } from '$lib';
	import { testData } from '$lib/data.svelte';

	const data = $derived([
		['WPM', Math.round(testData.wpm).toString()],
		['Accuracy', `${Math.round(testData.accuracy * 100) / 100}%`],
		['Time', `0:${testData.time}`]
	]);

	const settings = getSettings();
	const passage = getPassage();

	$effect(() => {
		const passages = passagesData[settings.level];
		const randomPassage = getRandomItem(passages).text;

		if (settings.levelUpdated) {
			passage.value = randomPassage;
		}

		const intervalId = setInterval(() => {
			if (testData.testStarted && testData.time !== 0) {
				testData.time--;
			}

			if (testData.testStarted) {
				testData.timerInSecs++;
			}
		}, 1e3);

		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<div class="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0">
	<div class="flex justify-between sm:gap-3">
		{#each data as [label, value], i (label)}
			{@render Data(label, value)}
			{#if i !== 2}
				{@render Separator()}
			{/if}
		{/each}
	</div>
	<div class="flex justify-between sm:items-center sm:gap-3">
		<Select
			name="difficulty"
			bind:value={settings.level}
			options={[
				['Easy', 'easy'],
				['Medium', 'medium'],
				['Hard', 'hard']
			]}
		></Select>
		<div class="hidden w-0.75 bg-neutral-500/30 text-transparent lg:inline">|</div>
		<Select
			name="mode"
			bind:value={settings.mode}
			options={[
				['Timed (60s)', 'timed'],
				['Passage', 'passage']
			]}
		></Select>
	</div>
</div>

{#snippet Data(label: string, value: string)}
	<div class="flex grow flex-col items-center sm:flex-row sm:gap-1">
		<span class="text-neutral-400">{label}:</span>
		<span class="text-lg font-bold">{value}</span>
	</div>
{/snippet}

{#snippet Separator()}
	<span class="w-[1.75px] bg-neutral-500/30"></span>
{/snippet}
