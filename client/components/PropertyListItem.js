import React from 'react';
import PropertyTag from './PropertyTag';

const PropertyListItem = ({ id, attributes, tags }) => {
	return (
		<div className='property-list-item card'>
			<img className='card-img' src={attributes.image_url} />
			<div className='card-content'>
				<div className='card-header'>
					<div>
						<h3 className='property-name'>{attributes.name}</h3>
						<div className='card-address'>{attributes.display_address}</div>
					</div>
					<div>
						<span className='starting-at'>Starting At</span>
						<h3 className='price'>${attributes.starting_at}</h3>
					</div>
				</div>
				<div className='card-tags'>
					{tags.map((tag,i) => <PropertyTag key={id+i} {...tag} />)}
				</div>
				<div className='card-footer'>
					<div className='capacity'>
						<span>Up to {attributes.max_capacity} guests</span>
					</div>
					<div className='divider' />
					<div className='duration'>
						<span>{ attributes.min_duration / 60} hours minimum</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PropertyListItem;