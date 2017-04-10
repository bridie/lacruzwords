import axios from 'axios';

export const FETCH_THEME = 'FETCH_THEME';

export function fetchTheme(theme) {
	const request = axios.get(`./../../data/${theme}.json`)

	return {
		type: FETCH_THEME,
		payload: request
	};
}
