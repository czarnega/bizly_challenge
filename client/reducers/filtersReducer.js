import { GUESTS_FILTER, TAGS_FILTER, SORT_FILTER, CLEAR_FILTER } from '../constants/actionTypes';
import * as SORTS from '../constants/filterTypes';

const INITIAL_STATE = { 
	guests: 2,
	tags: {
		hip: false,
		glam: false,
		modern: false,
		charming: false,
	},
	sort: SORTS.PRICE_ASCENDING,
	touched: false,
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
	case GUESTS_FILTER:
		return {...state, guests: action.payload, touched: true }
	case TAGS_FILTER: 
		let tagTarget = action.payload;
		return {...state, tags: {...state.tags, tagTarget: !state.tags[tagTarget] }, touched: true }
	case SORT_FILTER:
		return {...state, sort: action.payload, touched: true }
	case CLEAR_FILTER:
		return INITIAL_STATE;
	default:
		return state;
	}
}
