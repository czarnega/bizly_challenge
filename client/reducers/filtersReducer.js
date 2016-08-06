import { FILTER_ALL, FILTER_HIP, FILTER_GLAM, FILTER_MODERN, FILTER_CHARMING } from '../actions/actionTypes';

export default function (state = '', action) {
	switch (action.type) {
	case FILTER_ALL:
		return '';
	case FILTER_HIP:
		return action.filterBy;
	case FILTER_GLAM:
		return action.filterBy;
	case FILTER_MODERN:
		return action.filterBy;
	case FILTER_CHARMING:
		return action.filterBy;
	default:
		return state;
	}
}
