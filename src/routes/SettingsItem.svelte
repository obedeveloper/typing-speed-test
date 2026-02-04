<script lang="ts">
	import { slide } from 'svelte/transition';
	import Button from './Button.svelte';
	import downArrow from '$lib/assets/icon-down-arrow.svg';
	import { MenuButton } from './global-state.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	interface Props {
		title: string;
		items: string[];
		choosen: string;
		menuBtn: MenuButton;
	}

	const { choosen, items, menuBtn, title }: Props = $props();
	let choosenItem = $state((() => choosen)());
</script>

<div class="relative items-center gap-3 sm:flex">
	<h3 class="hidden text-neutral-400 sm:block">{title}:</h3>
	<Button
		text={choosenItem}
		icon={downArrow}
		class="text-neutral-400 sm:hidden"
		onclick={() => {
			menuBtn.toggleItems();
		}}
	></Button>

	{#if menuBtn.open}
		<div
			transition:slide
			class:right-0={title === 'Mode'}
			class="absolute mt-2 flex w-fit flex-col gap-1.5 rounded bg-neutral-700 p-2"
		>
			{@render Items(items, choosenItem, () => menuBtn.hideItems())}
		</div>
	{/if}

	<div class="hidden gap-2 sm:flex">
		{@render Items(items, choosenItem)}
	</div>
</div>

{#snippet Items(items: string[], choosen: string, onclick?: () => void)}
	{#each items as text (text)}
		{@const isChoosen = text === choosen}
		<Button
			{text}
			{isChoosen}
			onclick={() => {
				onclick?.();

				if (title === 'Difficulty') {
					goto(
						resolve('/[level=levels]/[mode=modes]', {
							level: text,
							mode: page.params.mode ?? 'Timed (60s)'
						})
					);
				} else {
					goto(
						resolve('/[level=levels]/[mode=modes]', {
							level: page.params.level ?? 'Easy',
							mode: text
						})
					);
				}

				choosenItem = text;
			}}
		></Button>
	{/each}
{/snippet}
