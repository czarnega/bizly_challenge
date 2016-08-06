import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { divIcon } from 'leaflet';


// hard set position for example		
const position = {
	'New York': [40.751329, -73.986701],
	'San Francisco': [37.785200, -122.420902]
};

class PropertyMap extends Component {
	constructor(props){
		super(props);
	}
	handleMarkerClick(property){
		function findPos(obj) {
	    var curtop = 0;
	    if (obj.offsetParent) {
        do {
          curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
	    	return [curtop] - 62;
	    }
		}
		window.scroll(0,findPos(document.getElementById(`card-${property.id}`)));
	}
	render() {
		return (
			<div className='property-map-container' >			
				<Map className='property-map' center={position[this.props.defaultLocation]} zoom={13} >
					<TileLayer
						url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
					{this.props.properties.map(property => (
						<Marker
							key={property.id}
							position={[property.attributes.lat, property.attributes.lng]}
							title={property.attributes.name}
							riseOnHover={true}
							onClick={this.handleMarkerClick.bind(this,property)}
						/>
					))}
				</Map>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	defaultLocation: state.filters.location
})

export default connect(mapStateToProps, null)(PropertyMap);

