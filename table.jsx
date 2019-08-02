import React from 'react';
import "./style.css"

export default class Table extends React.Component{
	constructor(){
		super();
		this.state={
			report_table:[]
		}
		this.buildTable=this.buildTable.bind(this)
	}
	componentDidUpdate(prevProps){
		if(prevProps.boxes_request!==this.props.boxes_request){
			this.buildTable()
		}
	}
	buildTable(){
		console.log(this.props.choiceAPI);
		console.log(this.props.boxes_request);
	}
	
	render(){
		return(
			<div className="table_block">
			</div>
		)
	}
}