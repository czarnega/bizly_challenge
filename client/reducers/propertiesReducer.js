import { ADD_PROPERTIES } from '../actions/actionTypes';

export default function(state = [], action) {
	switch(action.type){
		case ADD_PROPERTIES:
			return [...state, ...action.payload];
		default:
			return state;
	}
}