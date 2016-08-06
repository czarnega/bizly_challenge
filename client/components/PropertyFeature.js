import React from 'react';
import PropertyToolbar from './PropertyToolbar';
import VisiblePropertyList from './VisiblePropertyList';

const PropertyFeature = () => {
	return (
		<div>
			<div className='list-container'>
				<div className='column-placeholder' />
				<div className='property-list'>
					<PropertyToolbar />
					<VisiblePropertyList />
				</div>
				<div className='column-placeholder' />
			</div>
		</div>
	);
}

export default PropertyFeature;