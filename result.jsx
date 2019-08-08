import React from 'react';
import "./style.css"
export default class Result extends React.Component{
	constructor(){
		super();
		this.onCreateTable=this.onCreateTable.bind(this)
	}
	onCreateTable(){
		
	}
	render(){
		return(
			<div className="result_block">
				<button onClick={this.onCreateTable}>Create xlsx</button>
			</div>
		)
	}
}