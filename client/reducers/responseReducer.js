import { AWAITING_RESPONSE, RESPONSE_RECEIVED } from '../actions/actionTypes';

export default function(state = false, action) {
	switch(action.type){
		case AWAITING_RESPONSE:
			return true;
		case RESPONSE_RECEIVED:
			return false;
		default:
			return state;
	}
}