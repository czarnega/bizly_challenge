import { connect } from 'react-redux';
import PropertyList from './PropertyList';
import * as SORTS from '../constants/filterTypes';

const generatePropertyList = (array, searchTerm, filters) => {
	let properties = array;
	if(searchTerm){
		properties = filterProperties(array, searchTerm);
	}
	if(filters.touched){
		properties = properties.filter(property => filters.guests <= property.attributes.max_capacity)
	}
	return filters.touched ? sortProperties(properties,filters.sort) : properties;
}

const filterProperties = (array, searchTerm) => (
	array.filter((property,index) => {
		let attributes = property.attributes;
		let tags = property.tags;
		let term = searchTerm.toLowerCase();
		if(attributes.name.toLowerCase().includes(term)){
			return true;
		} else if(attributes.city.toLowerCase().includes(term)){
			return true;
		} else if(attributes.display_address.toLowerCase().includes(term)){
			return true;
		} else if(attributes.full_address.toLowerCase().includes(term)){
			return true;
		} else if(attributes.details.description.toLowerCase().includes(term)){
			return true;
		} else if(attributes.details.executive_summary.toLowerCase().includes(term)){
			return true;
		} else {
			return tags.filter(tag => tag.name.toLowerCase().includes(term)).length > 0;
		}
	})
)

const sortProperties = (array, sortMethod) => {
	switch(sortMethod){
		case SORTS.PRICE_ASCENDING:
			return array.sort((a,b) => (a.attributes.starting_at - b.attributes.starting_at));
		case SORTS.PRICE_DESCENDING:
			return array.sort((a,b) => (b.attributes.starting_at - a.attributes.starting_at));
		case SORTS.GUESTS_ASCENDING:
			return array.sort((a,b) => (a.attributes.max_capacity - b.attributes.max_capacity));
		case SORTS.GUESTS_DESCENDING:
			return array.sort((a,b) => (b.attributes.max_capacity - a.attributes.max_capacity));
		case SORTS.DURATION_ASCENDING:
			return array.sort((a,b) => (a.attributes.min_duration - b.attributes.min_duration));
		case SORTS.DURATION_DESCENDING:
			return array.sort((a,b) => (b.attributes.min_duration - a.attributes.min_duration));
		default:
			return array;
	}
}

const mapStateToProps = state => ({
	properties: generatePropertyList(state.properties, state.search, state.filters),
})

export default connect(mapStateToProps,null)(PropertyList);
