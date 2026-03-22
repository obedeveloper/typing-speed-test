import { getRandomItem } from '$lib';
import data from '$lib/data.json';
import type { Level, Mode } from '$lib/types';

export const load = () => {
	const levels = Object.keys(data);
	const randomLevel = getRandomItem(levels) as Level;

	const passages = data[randomLevel];
	const randomPassage = getRandomItem(passages).text;

	const randomMode = getRandomItem(['passage', 'timed']) as Mode;

	return { randomLevel, randomPassage, randomMode };
};
