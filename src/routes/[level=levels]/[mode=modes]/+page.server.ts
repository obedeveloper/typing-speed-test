import { getText } from '$lib/utils';

export const load = ({ params: { level } }) => {
	return { text: getText(level) };
};
