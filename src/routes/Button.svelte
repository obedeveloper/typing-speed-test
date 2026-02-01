<script lang="ts">
	interface Props {
		text: string;
		isChoosen?: boolean;
		icon?: string;
		class?: string;
		onclick?: () => void;
	}

	const { isChoosen, text, class: styles, icon, onclick }: Props = $props();
</script>

<button
	class:text-blue-400={isChoosen}
	class="flex cursor-pointer gap-2 rounded border px-1 py-0.5 text-nowrap {styles}"
	{onclick}
>
	{text}
	{#if icon}
		<img src={icon} alt="" />
	{/if}
</button>
