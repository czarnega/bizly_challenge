import React from 'react';
import PropertyListItem from './PropertyListItem';

const PropertyList = ({ properties }) => {
	return (
		<div>
			<div className='list-container'>
				<div className='column-placeholder' />
				<div className='property-list'>
					{properties ? properties.map((property,i) => (<PropertyListItem key={i} {...property} />)) : ''}
				</div>
				<div className='column-placeholder' />
			</div>
		</div>
	);
}

export default PropertyList;