import React from 'react';
import "./style.css";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'

export default class Head extends React.Component{
	constructor(){
		super();
		this.state={
			choiceAPI: '',
			btn_base: true
		}
		this.onChoiceCountry=this.onChoiceCountry.bind(this)
		this.onClick=this.onClick.bind(this)
		
	}
	
	onChoiceCountry(){
		this.setState({
			choiceAPI: event.target.value,
			btn_base: false
		});
		
	}
	onClick(){
			this.props.updateData(this.state.choiceAPI);
			this.setState({
				btn_base:true
			});
	}
	
	
	render(){
		return(
			<div className="head_block">
				<select name="head_select" onChange={this.onChoiceCountry} value={this.state.choiceAPI}>
					<option value="" selected disabled hidden>Выберите базу</option>
					<option value="https://restcountries.eu/rest/v2/all">Country</option>
					<option value="https://api.exchangeratesapi.io/latest?base=EUR">Euro course</option>
					<option value="https://api.exchangeratesapi.io/latest?base=USD">Dollar course</option>
					<option value="https://api.exchangeratesapi.io/latest?base=GBP">GBP course</option>
				</select>
				<button className="btn_head" onClick={this.onClick} disabled={this.state.btn_base}>Загрузить базу</button>
				
			</div>
			
		)
	}
}