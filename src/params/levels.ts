import { levels } from '$lib/consts';

export const match = (param) => {
	return levels.includes(param);
};
