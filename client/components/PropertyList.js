import React from 'react';
import PropertyListItem from './PropertyListItem';

const PropertyList = ({ properties }) => {
	return (
		<div>
			<div>Property List</div>
			<div className='property-list'>
				{properties ? properties.map((property,i) => (<PropertyListItem key={i} {...property} />)) : ''}
			</div>
		</div>
	);
}

export default PropertyList;