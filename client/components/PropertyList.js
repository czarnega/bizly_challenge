import React from 'react';
import PropertyListItem from './PropertyListItem';

const PropertyList = ({properties}) => {
	return (
		<div>
			<div>Property List</div>
			{properties ? properties.map((property,i) => <PropertyListItem key={i} />) : ''}
		</div>
	);
}

export default PropertyList;