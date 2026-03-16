<script lang="ts">
	import Select from './Select.svelte';

	const data = [
		['WPM', '0'],
		['Accuracy', '100%'],
		['Time', '0:60']
	];

	let difficulty = $state('hard');
	let mode = $state('timed');
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
			bind:value={difficulty}
			options={[
				['Easy', 'easy'],
				['Medium', 'medium'],
				['Hard', 'hard']
			]}
		></Select>
		<div class="hidden w-0.75 bg-neutral-500/30 text-transparent lg:inline">|</div>
		<Select
			name="mode"
			bind:value={mode}
			options={[
				['Timed(60s)', 'timed'],
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
