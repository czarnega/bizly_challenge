import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import PropertyList from './PropertyList';

class App extends Component{
	componentDidMount(){
		this.props.getProperties();
	}

	render(){
		console.log('this.props in App:',this.props)
		return(
			<div className='app-container'>
				<div className='header'>
					<span className='header-title'>Bizly Challenge</span>
				</div>
				<PropertyList properties={this.props.properties} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	properties: state.properties
})

export default connect(mapStateToProps, actions)(App);