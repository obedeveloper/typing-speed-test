<script lang="ts">
	import logoLarge from '$lib/assets/logo-large.svg';
	import logoSmall from '$lib/assets/logo-small.svg';
	import personalBest from '$lib/assets/icon-personal-best.svg';
	import { data, levels, modes } from '$lib/consts';
	import downArrow from '$lib/assets/icon-down-arrow.svg';
	import Button from './Button.svelte';
	import { slide } from 'svelte/transition';

	class MenuButton {
		open = $state(false);

		toggle() {
			this.open = !this.open;
		}

		hide() {
			this.open = false;
		}
	}

	interface SettingsItemParams {
		title: string;
		items: string[];
		choosen: string;
		menuBtn: MenuButton;
	}

	const difficultyMenu = new MenuButton();
	const modeMenu = new MenuButton();

	$effect(() => {
		if (difficultyMenu.open && modeMenu.open) {
			difficultyMenu.hide();
			modeMenu.hide();
		}
	});
</script>

<header class="wrapper my-4">
	<div class="mb-6 flex items-center justify-between">
		<picture>
			<source srcset={logoLarge} media="(width >= 40rem)" />
			<img src={logoSmall} alt="Typing Speed Test Logo" />
		</picture>
		<h2 class="flex h-fit text-lg text-neutral-400">
			<img src={personalBest} alt="Personal Best Icon" class="mr-2" />
			<span class="hidden sm:mr-1 sm:inline-block">Personal</span>
			<span class="capitalize sm:normal-case">best</span>:
			<span class="ml-1 text-white">95 WPM</span>
		</h2>
	</div>
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
			{@render SettingsItem({
				title: 'Difficulty',
				items: levels,
				choosen: levels[2],
				menuBtn: difficultyMenu
			})}
			{@render SettingsItem({ title: 'Mode', items: modes, choosen: modes[0], menuBtn: modeMenu })}
		</div>
	</div>
</header>

{#snippet SettingsItem({ choosen, items, title, menuBtn }: SettingsItemParams)}
	<div class="relative items-center gap-3 sm:flex">
		<h3 class="hidden text-neutral-400 sm:block">{title}:</h3>
		<Button
			text={choosen}
			icon={downArrow}
			class="text-neutral-400 sm:hidden"
			onclick={() => {
				menuBtn.toggle();
			}}
		></Button>

		{#if menuBtn.open}
			<div
				transition:slide
				class:right-0={title === 'Mode'}
				class="absolute mt-2 flex w-fit flex-col gap-1.5 rounded bg-neutral-700 p-2"
			>
				{@render Items(items, choosen, () => {
					menuBtn.hide();
				})}
			</div>
		{/if}

		<div class="hidden gap-2 sm:flex">
			{@render Items(items, choosen)}
		</div>
	</div>
{/snippet}

{#snippet Items(items: string[], choosen: string, onclick?: () => void)}
	{#each items as text (text)}
		{@const isChoosen = text === choosen}
		<Button {text} {isChoosen} {onclick}></Button>
	{/each}
{/snippet}
