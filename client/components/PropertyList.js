import React from 'react';
import PropertyToolbar from './PropertyToolbar';
import PropertyListItem from './PropertyListItem';

const PropertyList = ({ properties }) => {
	return (
		<div>
			<div className='list-container'>
				<div className='column-placeholder' />
				<div className='property-list'>
					<PropertyToolbar />
					{properties ? properties.map((property,i) => (<PropertyListItem key={i} {...property} />)) : ''}
				</div>
				<div className='column-placeholder' />
			</div>
		</div>
	);
}

export default PropertyList;