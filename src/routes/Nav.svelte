<script lang="ts">
	import globalState from './global-state.svelte';
	import { data, levels, modes } from '$lib/consts';
	import SettingsItem from './SettingsItem.svelte';

	$effect(() => {
		if (globalState.difficultyMenu.open && globalState.modeMenu.open) {
			globalState.difficultyMenu.hideItems();
			globalState.modeMenu.hideItems();
		}
	});
</script>

<div class="flex flex-wrap justify-between gap-x-5 gap-y-2 border-b border-neutral-400 pb-3">
	<div class="flex w-full items-center justify-between gap-3 md:w-fit">
		{#each data as { key, value } (key)}
			<h3 class="flex flex-col items-center gap-1 text-neutral-400 md:flex-row">
				<span>{key}:</span>
				<span class="text-lg font-bold text-white">{value}</span>
			</h3>
		{/each}
	</div>
	<div class="flex w-full justify-between gap-5 md:w-fit">
		<SettingsItem
			title="Difficulty"
			items={levels}
			choosen={levels[2]}
			menuBtn={globalState.difficultyMenu}
		></SettingsItem>
		<SettingsItem
			title="Mode"
			items={modes}
			choosen={modes[0]}
			menuBtn={globalState.modeMenu}
		></SettingsItem>
	</div>
</div>
