<script lang="ts">
	interface Props {
		name: string;
		options: [string, string][];
		value: string;
	}

	let { name, options, value = $bindable() }: Props = $props();
</script>

<div class="flex items-center gap-2">
	<select bind:value {name} class="rounded border border-neutral-500 p-0.5 text-center lg:hidden">
		{#each options as [label, option] (option)}
			<option value={option}>{label}</option>
		{/each}
	</select>

	<span class="hidden text-neutral-400 capitalize lg:inline">{name}:</span>
	<div class="hidden lg:flex lg:gap-2">
		{#each options as [label, option] (option.toLowerCase())}
			{@const selected = option === value}

			<button
				class={[
					'cursor-pointer rounded border-[1.25px] p-1 transition-colors',
					selected ? 'border-blue-500' : 'border-neutral-500'
				]}
				onclick={() => (value = option)}
			>
				{label}
			</button>
		{/each}
	</div>
</div>
