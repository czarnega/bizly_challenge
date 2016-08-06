// Combine reducers will go here
import { combineReducers } from 'redux';
import response from './responseReducer';
import properties from './propertiesReducer';
import search from './searchReducer';
import filters from './filtersReducer';
// This is a map of our Redux State object
// e.g. application state: State = { properties:... }

// state.response.waiting is a boolean to show whether client is
// currently waiting for a response from the server
const rootReducer = combineReducers({
	response,
	properties,
	search,
	filters,
});

export default rootReducer;
