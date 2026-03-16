<script lang="ts">
	import { resolve } from '$app/paths';
	import logo from '$lib/assets/logo-small.svg';
	import logoLarge from '$lib/assets/logo-large.svg';
	import bestScoreIcon from '$lib/assets/icon-personal-best.svg';
</script>

<div class="flex justify-between">
	<a href={resolve('/')}>
		<picture>
			<source media="(width >= 40rem)" srcset={logoLarge} />
			<img src={logo} alt="" />
		</picture>
	</a>
	<div class="flex items-center gap-2 text-neutral-400">
		<img src={bestScoreIcon} alt="" class="w-6 sm:w-8" />
		<span class="hidden sm:inline">Personal</span>
		<span class="sm:lowercase">Best:</span>
		<span class="text-nowrap text-white">92 WPM</span>
	</div>
</div>
