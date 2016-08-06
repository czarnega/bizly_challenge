import React, { Component } from 'react';
import PropertyTag from './PropertyTag';

class PropertyListItem extends Component {
	constructor(props){
		super(props);

		this.state = {
			open: false
		}
		this.toggleOpen = this.toggleOpen.bind(this);
	}
	toggleOpen(){
		this.setState({
			open: !this.state.open
		})
	}
	render(){
		return (
			<div className='property-list-item card' id={`card-${this.props.id}`} onClick={this.toggleOpen}>
				<img className='card-img' src={this.props.attributes.image_url} />
				<div className='card-content'>
					<div className='card-header'>
						<div>
							<h3 className='property-name'>{this.props.attributes.name}</h3>
							<div className='card-address'>{this.props.attributes.display_address}</div>
						</div>
						<div>
							<span className='starting-at'>Starting At</span>
							<h3 className='price'>${this.props.attributes.starting_at}</h3>
						</div>
					</div>
					<div className='card-tags'>
						{this.props.tags.map((tag,i) => <PropertyTag key={this.props.id+i} {...tag} />)}
					</div>
					<div className='card-footer'>
						<div className='capacity'>
							<span>Up to {this.props.attributes.max_capacity} guests</span>
						</div>
						<div className='divider' />
						<div className='duration'>
							<span>{this.props.attributes.min_duration / 60} hours minimum</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PropertyListItem;