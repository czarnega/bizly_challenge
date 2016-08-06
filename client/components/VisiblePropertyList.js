import { connect } from 'react-redux';
import PropertyList from './PropertyList';

const generatePropertyList = (array, searchTerm, filters) => {
	let unfilteredProperties = array;
	if(searchTerm){
		unfilteredProperties = filterProperties(array, searchTerm);
	}
	return unfilteredProperties.filter(property => {
		return filters.guests <= property.attributes.max_capacity
	})
}

const filterProperties = (array, searchTerm) => {
	return array.filter((property,index) => {
		let attributes = property.attributes;
		let tags = property.tags;
		let term = searchTerm.toLowerCase();
		if(attributes.name.toLowerCase().includes(term)){
			return true;
		} else if(attributes.full_address.toLowerCase().includes(term)){
			return true;
		} else if(attributes.details.description.toLowerCase().includes(term)){
			return true;
		} else if(attributes.details.executive_summary.toLowerCase().includes(term)){
			return true;
		} else {
			let flag = false;
			tags.forEach(tag => {
				if(tag.name.toLowerCase().includes(term)){
					flag = true
				}
			})
			return flag;
		}
	})
}

const mapStateToProps = state => ({
	properties: generatePropertyList(state.properties, state.search, state.filters),
})

export default connect(mapStateToProps,null)(PropertyList);
