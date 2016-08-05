import * as TYPES from './actionTypes';

const API_URL = 'http://localhost:3090'

export const getProperties = () => {
	console.log('getProperties called')
	return (dispatch) => (
	 fetch(`${API_URL}/properties`)
		.then(rawResponse => rawResponse.json())
		.then(response => {
			console.log('response in getProperties:',response)
			dispatch({ type: TYPES.ADD_PROPERTIES, payload: response.data })
		})
		.catch(error => { console.log('Error in getProperties of ',error) })
	)
}