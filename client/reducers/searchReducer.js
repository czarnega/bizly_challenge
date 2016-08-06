import { SET_SEARCH, CLEAR_SEARCH } from '../constants/actionTypes';

export default function (state = '', action) {
	switch (action.type) {
	case SET_SEARCH:
		return action.searchTerm;
	case CLEAR_SEARCH:
		return '';
	default:
		return state;
	}
}
