import React from 'react';
import PropertyToolbar from './PropertyToolbar';
import PropertyMap from './PropertyMap';
import PropertyList from './PropertyList';

const PropertyFeature = ({ properties }) => {
	return (
		<div>
			<div className='list-container'>
				<div className='column-placeholder' />
				<div className='property-list'>
					<PropertyToolbar />
					<PropertyMap properties={properties} />
					<PropertyList properties={properties} />
				</div>
				<div className='column-placeholder' />
			</div>
		</div>
	);
}

export default PropertyFeature;