import { EStatusTheme } from '../types';

const getThemeByStatusCode = (status: string | number): EStatusTheme => {
	const statusType = new Map<number, EStatusTheme>([
		[200, EStatusTheme.SUCCESS],
		[204, EStatusTheme.SUCCESS],
		[400, EStatusTheme.CLIENT_ERROR],
		[401, EStatusTheme.CLIENT_ERROR],
		[403, EStatusTheme.CLIENT_ERROR],
		[404, EStatusTheme.CLIENT_ERROR],
		[409, EStatusTheme.CLIENT_ERROR],
		[422, EStatusTheme.CLIENT_ERROR],
		[429, EStatusTheme.CLIENT_ERROR],
		[499, EStatusTheme.CLIENT_ERROR],
		[500, EStatusTheme.SERVER_ERROR],
		[502, EStatusTheme.SERVER_ERROR],
		[504, EStatusTheme.SERVER_ERROR]
	]);

	const statusString = String(status);
	for (const [statusCode, theme] of statusType.entries()) {
		if (statusString === String(statusCode)) {
			return theme;
		}
	}
	
	return EStatusTheme.UNKNOWN;
};

export default getThemeByStatusCode;
