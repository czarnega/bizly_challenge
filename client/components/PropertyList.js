import React from 'react';
import PropertyListItem from './PropertyListItem';
import PlaceholderPropertyListItem from './PlaceholderPropertyListItem';

const PropertyList = ({ properties }) => {
	return (
		<div>
			{properties.length > 0 ? properties.map((property,i) => (<PropertyListItem key={i} {...property} />)) : <PlaceholderPropertyListItem key={1} />}
		</div>
	);
}

export default PropertyList;