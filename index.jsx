import React from 'react';
import ReactDOM from 'react-dom';
import Head from './head';
import Filter from './filter';
import Result from './result';
import ResultTable from './table';
export default class Full_component extends React.Component{
	constructor(){
		super();
		this.state={
			choiceAPI: '',
			boxes_request:[],
			btn_click:''
		}
		this.updateData=this.updateData.bind(this)
		this.updateBuild=this.updateBuild.bind(this)
	}
	

	updateData(value) {
		this.setState({ choiceAPI: value })
	}
	updateBuild(value){
		this.setState({boxes_request: [...value] })
	}
	render(){
			return(
			<div className="form">
				<Head
					updateData={this.updateData}
				>
				</Head>
				<Filter
					choiceAPI={this.state.choiceAPI}
					updateBuild={this.updateBuild}
				>
				</Filter>
				<Result></Result>
				<ResultTable
					choiceAPI={this.state.choiceAPI}
					boxes_request={this.state.boxes_request}
				></ResultTable>
			</div>
		)
	}
}
	ReactDOM.render((
	<Full_component/>
	), document.getElementById('root'));