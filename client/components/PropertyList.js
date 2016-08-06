import React from 'react';
import PropertyListItem from './PropertyListItem';

const PropertyList = ({ properties }) => {
	return (
		<div>
			{properties ? properties.map((property,i) => (<PropertyListItem key={i} {...property} />)) : ''}
		</div>
	);
}

export default PropertyList;