import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class PropertyToolbar extends Component {
	constructor(props){
		super(props);
		this.state = {
			options: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}
	componentWillMount(){
		let options = [];
		for(let i = 2; i < 31; i++){
			options.push(<option key={i} value={i}>{i} guests</option>)
		}
		this.setState({
			options
		})
	}
	handleChange(evt){
		this.props.setSearch(evt.target.value);
	}
	handleSelect(evt){
		this.props.setGuestsFilter(parseInt(evt.target.value))
	}
	render(){
		return (
			<div className='property-toolbar'>
				<input
					placeholder='Enter a keyword to search for...'
					className='property-search-input'
					type="text" 
					value={this.props.search}
					onChange={this.handleChange}
				/>
				{this.props.search ? <div className='clear-search-button' onClick={this.props.clearSearch}>x</div> : '' }
				<select 
					className='guests-select'
					name='guests'
					value={this.props.filters.guests}
					onChange={this.handleSelect}
				>
				 	{this.state.options}
				</select>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters,
	search: state.search
})

export default connect(mapStateToProps,actions)(PropertyToolbar);