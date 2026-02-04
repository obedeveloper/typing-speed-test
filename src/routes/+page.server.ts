import { resolve } from '$app/paths';
import { levels, modes } from '$lib/consts';
import { getRandomItem } from '$lib/utils';
import { redirect } from '@sveltejs/kit';

export const load = () => {
	const level = getRandomItem(levels);
	const mode = getRandomItem(modes);

	redirect(302, resolve('/[level=levels]/[mode=modes]', { level, mode }));
};
