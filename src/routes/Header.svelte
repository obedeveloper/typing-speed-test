<script lang="ts">
	import logoLarge from '$lib/assets/logo-large.svg';
	import logoSmall from '$lib/assets/logo-small.svg';
	import personalBest from '$lib/assets/icon-personal-best.svg';
	import { resolve } from '$app/paths';
	import Nav from './Nav.svelte';
</script>

<header class="wrapper py-4">
	<div class="mb-6 flex items-center justify-between">
		<a href={resolve('/')} data-sveltekit-reload>
			<picture>
				<source srcset={logoLarge} media="(width >= 40rem)" />
				<img src={logoSmall} alt="Typing Speed Test Logo" />
			</picture>
		</a>
		<h2 class="flex h-fit text-lg text-neutral-400">
			<img src={personalBest} alt="Personal Best Icon" class="mr-2" />
			<span class="hidden sm:mr-1 sm:inline-block">Personal</span>
			<span class="capitalize sm:normal-case">best</span>:
			<span class="ml-1 text-white">95 WPM</span>
		</h2>
	</div>
	<Nav></Nav>
</header>
