import React from 'react';
import "./style.css";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import Tooltip from 'react-bootstrap/Tooltip'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


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
				<div className="Select_div">
					<select className="selects" onChange={this.onChoiceCountry} value={this.state.choiceAPI}>
						<option value="" selected disabled hidden>Выберите базу</option>
						<option value="https://restcountries.eu/rest/v2/all">Country</option>
						<option value="https://api.exchangeratesapi.io/latest?base=EUR">Euro course</option>
						<option value="https://api.exchangeratesapi.io/latest?base=USD">Dollar course</option>
						<option value="https://api.exchangeratesapi.io/latest?base=GBP">GBP course</option>
					</select>
				</div>
				<div className="Instruction">
					<ButtonToolbar>
					{['Инструкция'].map(placement => (
						<OverlayTrigger
						key={placement}
						placement={placement}
						overlay={
							<Tooltip id={`tooltip-${placement}`}>
								1.Для старта работы изначально нужно выбрать базу из выпадающего списка.<br></br>
								2.Вторым шагом является выбор столбцов.<br></br>
								3.Кнопка «Build table» формирование таблицы для предварительного просмотра перед скачиванием.<br></br>
								4.Кнопка «Download as XLS» - сохранение таблицы в формате .xls.
							</Tooltip>
						}
						>
						<Button variant="light">Инструкция</Button>
						</OverlayTrigger>
					))}
					</ButtonToolbar>
				</div>
			</div>
			
		)
	}
}