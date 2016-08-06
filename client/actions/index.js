import * as TYPES from './actionTypes';

const API_URL = 'http://localhost:3090'

export const getProperties = () => {
	console.log('getProperties called')
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
				// console.log('propertyTags:',propertyTags)
				return {...property, tags: propertyTags}
			})
			console.log('response in getProperties:',response)
			dispatch({ type: TYPES.ADD_PROPERTIES, payload: properties })
			dispatch({ type: TYPES.RESPONSE_RECEIVED })
		})
		.catch(error => { 
			dispatch({ type: TYPES.RESPONSE_RECEIVED })
			console.log('Error in getProperties of ',error) 
		})
	)
}

// export const setSearch = (searchTerm) => {
// 	console.log(`setSearch action creator called with searchTerm of ${searchTerm}`)
// 	return {
// 		type: TYPES.SET_SEARCH,
// 		searchTerm,
// 	}
// } 

export const setSearch = (searchTerm) => ({
	type: TYPES.SET_SEARCH,
	searchTerm,
});

export const clearSearch = () => ({
	type: TYPES.CLEAR_SEARCH,
});