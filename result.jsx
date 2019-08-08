import React from 'react';
import "./style.css"
import xlsx from 'node-xlsx';
export default class Result extends React.Component{
	constructor(){
		super();
		this.onCreateTable=this.onCreateTable.bind(this)
	}
	onCreateTable(){
		const data = [this.props.boxes_request];
				var buffer = xlsx.build([{name: "mySheetName", data: data}]);
		console.log(buffer)
	}
	render(){
		return(
			<div className="result_block">
				<button onClick={this.onCreateTable}>Create xlsx</button>
			</div>
		)
	}
}