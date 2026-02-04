export const load = async ({ params, data }) => {
	const { level, mode } = params;
	const { text } = data;

	return { level, mode, text };
};
