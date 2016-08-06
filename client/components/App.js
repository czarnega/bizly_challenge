import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import VisiblePropertyList from './VisiblePropertyList';

class App extends Component{
	componentDidMount(){
		this.props.getProperties();
	}

	render(){
		return(
			<div className='app-container'>
				<div className='header'>
					<span className='header-title'>Bizly Challenge</span>
				</div>
				{this.props.isLoading ? <div className='loading-message'><h1>Loading properties!</h1></div> : <VisiblePropertyList />}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	properties: state.properties,
	isLoading: state.response,
})

export default connect(mapStateToProps, actions)(App);