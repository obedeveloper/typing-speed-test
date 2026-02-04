import { modes } from '$lib/consts';

export const match = (param) => {
	return modes.includes(param);
};
