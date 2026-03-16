export const handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		preload: ({ type }) => {
			return type === 'font' || type === 'css' || type === 'js' || type === 'asset';
		}
	});

	return response;
};
