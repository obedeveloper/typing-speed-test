import data from '$lib/data.json';

export function getText(level: string) {
	if (level === 'Easy') {
		return getRandomItem(data.easy.map((t) => t.text));
	} else if (level === 'Medium') {
		return getRandomItem(data.medium.map((t) => t.text));
	} else {
		return getRandomItem(data.hard.map((t) => t.text));
	}
}

export function getRandomItem<T>(array: T[]) {
	const { length } = array;
	return array[Math.floor(Math.random() * length)];
}
