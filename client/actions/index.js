import * as TYPES from '../constants/actionTypes';

const API_URL = 'http://localhost:3090'

export const getProperties = () => {
	return (dispatch) => (
	 fetch(`${API_URL}/properties`)
		.then(rawResponse => rawResponse.json())
		.then(response => {
			let tags = {};
			response.included.forEach(tag => {
				tags[tag.id] = tag.attributes
			})
			let properties = response.data.map(property => {
				let propertyTags = property.relationships.tags.data.map(relationshipTag => {
					return tags[relationshipTag.id]
				})
				return {...property, tags: propertyTags}
			})
			dispatch({ type: TYPES.ADD_PROPERTIES, payload: properties })
			dispatch({ type: TYPES.RESPONSE_RECEIVED })
		})
		.catch(error => { 
			dispatch({ type: TYPES.RESPONSE_RECEIVED })
			console.log('Error in getProperties of ',error) 
		})
	)
}

export const setSearch = (searchTerm) => ({
	type: TYPES.SET_SEARCH,
	searchTerm,
});

export const clearSearch = () => ({
	type: TYPES.CLEAR_SEARCH,
});

export const setLocationFilter = (location) => ({
	type: TYPES.LOCATION_FILTER,
	payload: location
})

export const setGuestsFilter = (guestsNum) => ({
	type: TYPES.GUESTS_FILTER,
	payload: guestsNum
})

export const setSortFilter = (sort) => ({
	type: TYPES.SORT_FILTER,
	payload: sort
})

export const clearFilters = () => ({
	type: TYPES.CLEAR_FILTER,
})