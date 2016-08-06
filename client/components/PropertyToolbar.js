import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import * as Sorts from '../constants/filterTypes';

class PropertyToolbar extends Component {
	constructor(props){
		super(props);
		this.state = {
			guestOptions: [],
			sortOptions: [],
		}
		this.handleLocationSelect = this.handleLocationSelect.bind(this);
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.handleGuestSelect = this.handleGuestSelect.bind(this);
		this.handleSortSelect = this.handleSortSelect.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}
	componentWillMount(){
		// Generate options for guest number and sort select fields
		let guestOptions = [], sortOptions = [];
		for(let i = 2; i < 31; i++){
			guestOptions.push(<option key={i} value={i}>{i} guests</option>)
		}
		for(let key in Sorts){
			let text = Sorts[key].toLowerCase().split('_').join(' ');
			sortOptions.push(<option key={key} value={Sorts[key]}>{text}</option>)
		}
		this.setState({
			guestOptions,
			sortOptions
		})
	}
	handleLocationSelect(evt){
		// Calls setLocationFilter action creator with locations-select option
		this.props.setLocationFilter(evt.target.value)
	}
	handleSearchInput(evt){
		// Calls setSearch action creator with search term
		this.props.setSearch(evt.target.value);
	}
	handleGuestSelect(evt){
		// Calls setGuestsFilter action creator with guests-select option
		this.props.setGuestsFilter(parseInt(evt.target.value))
	}
	handleSortSelect(evt){
		// Calls setSortFilter action creator with sorts-select option
		this.props.setSortFilter(evt.target.value)
	}
	handleClear(){
		this.props.clearSearch();
		this.props.clearFilters();
	}
	render(){
		return (
			<div className='property-toolbar'>
				<select 
					className='locations-select'
					name='locations'
					value={this.props.filters.location}
					onChange={this.handleLocationSelect}
				>
				 	<option key={'NYC'} value={'New York'}>New York</option>
				 	<option key={'SF'} value={'San Francisco'}>San Francisco</option>
				</select>
				<input
					placeholder='Enter a keyword to search for...'
					className='property-search-input'
					type="text" 
					value={this.props.search}
					onChange={this.handleSearchInput}
				/>
				<select 
					className='guests-select'
					name='guests'
					value={this.props.filters.guests}
					onChange={this.handleGuestSelect}
				>
				 	{this.state.guestOptions}
				</select>
				<select 
					className='sorts-select'
					name='sorts'
					value={this.props.filters.sort}
					onChange={this.handleSortSelect}
				>
				 	{this.state.sortOptions}
				</select>
				{this.props.filters.touched || this.props.search ? (
					<div
						className='clear-search-button red-btn'
						onClick={this.handleClear}
					>
					Reset Search
					</div>
					) : ''}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters,
	search: state.search
})

export default connect(mapStateToProps,actions)(PropertyToolbar);