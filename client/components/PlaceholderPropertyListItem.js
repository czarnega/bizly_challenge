import React from 'react';

const PlaceholderPropertyListItem = () => {
	return (
		<div className='property-list-item card'>
			<img className='card-img' src={'../../assets/hotel_placeholder.png'} />
			<div className='card-content'>
				<div className='card-header'>
					<div>
						<h3 className='property-name'>No results found...</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlaceholderPropertyListItem;