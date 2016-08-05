import React from 'react';

const PropertyListItem = ({ attributes }) => {
	return (
		<div className='property-list-item card'>
			<img className='card-img' src={attributes.image_url} />
			<div className='card-content'>
				<div className='card-header'>
					<div><h3>{attributes.name}</h3></div>
					<div>{attributes.starting_at}</div>
				</div>
				<div className='card-address'>
					<div>{attributes.full_address}</div>
				</div>
				<div className='card-body'>
					<div dangerouslySetInnerHTML={{__html: attributes.details.deckline}} />
					<div dangerouslySetInnerHTML={{__html: attributes.details.description}} />
				</div>
			</div>
		</div>
	);
}

export default PropertyListItem;