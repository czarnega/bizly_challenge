import * as TYPES from './actionTypes';

const API_URL = 'http://localhost:3090'

export const getProperties = async () => {
	console.log('getProperties called')
	await fetch(`${API_URL}/properties`)
		.then(rawResponse => rawResponse.json())
		.then(response => ({ type: TYPES.ADD_PROPERTIES, payload: response.data }))
		.catch(error => { console.log('Error in getProperties of ',error) })
}