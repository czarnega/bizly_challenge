import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { divIcon } from 'leaflet';


// hard set position for example		
const position = [
	40.751329, 
	-73.986701,
];

class PropertyMap extends Component {
	render() {
		return (
			<div className='property-map-container' >			
				<Map className='property-map' center={position} zoom={13} >
					<TileLayer
						url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>

				</Map>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(PropertyMap);

