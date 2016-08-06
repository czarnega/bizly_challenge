import { GUESTS_FILTER, TAGS_FILTER, CLEAR_FILTER } from '../actions/actionTypes';

const INITIAL_STATE = { 
	guests: 2,
	tags: {
		hip: false,
		glam: false,
		modern: false,
		charming: false,
	}
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
	case GUESTS_FILTER:
		return {...state, guests: action.payload }
	case TAGS_FILTER: 
		let tagTarget = action.payload;
		return {...state, tags: {...state.tags, tagTarget: !state.tags[tagTarget] }}
	case CLEAR_FILTER:
		return INITIAL_STATE;
	default:
		return state;
	}
}
