import { FETCH_THEME } from '../actions/index';

const INITIAL_STATE = { themes: ['animals'], currentTheme: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_THEME:
			return { ...state, currentTheme: action.payload.data }
		default:
			return state;
	}
}