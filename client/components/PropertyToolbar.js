import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class PropertyToolbar extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(evt){
		this.props.setSearch(evt.target.value);
	}
	render(){
		return (
			<div className='property-toolbar'>
				<input 
					className='property-search-input'
					type="text" 
					value={this.props.search}
					onChange={this.handleChange}
				/>
				{this.props.search ? <div className='clear-search-button' onClick={this.props.clearSearch}>x</div> : '' }
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	search: state.search
})

export default connect(mapStateToProps,actions)(PropertyToolbar);