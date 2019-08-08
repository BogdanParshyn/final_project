import React from 'react';
import "./style.css"
import xlsx from 'node-xlsx';
export default class Result extends React.Component{
	constructor(){
		super();
		this.onCreateTable=this.onCreateTable.bind(this)
	}
	onCreateTable(){
		const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
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