export function getRandomItem<T>(items: T[]) {
	const { length } = items;
	return items[getRandomInt(0, length)];
}

function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
