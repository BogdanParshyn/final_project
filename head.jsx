import React from 'react';
import "./style.css";

export default class Head extends React.Component{
	constructor(){
		super();
		this.state={
			choiceAPI: ''
		}
		this.onChoiceCountry=this.onChoiceCountry.bind(this)
	}
	
	onChoiceCountry(){
		this.setState({
			choiceAPI: event.target.value,
		},()=>this.props.updateData(this.state.choiceAPI));
		
	}
	onClick(){
			this.props.updateData(this.state.choiceAPI);
	}
	
	
	render(){
		return(
			<div className="head_block">
				<select onChange={this.onChoiceCountry} value={this.state.choiceAPI}>
					<option value="" selected disabled hidden>Выберите базу</option>
					<option value="https://restcountries.eu/rest/v2/all">Country</option>
					<option value="https://api.exchangeratesapi.io/latest?base=EUR">Euro course</option>
					<option value="https://api.exchangeratesapi.io/latest?base=USD">Dollar course</option>
					<option value="https://api.exchangeratesapi.io/latest?base=GBP">GBP course</option>
				</select>
			</div>
			
		)
	}
}