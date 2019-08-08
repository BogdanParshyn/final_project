import React from 'react';
import "./style.css"
import ReactToExcel from 'react-html-table-to-excel';
export default class Result extends React.Component{
	constructor(){
		super();
		
	}
	render(){
		return(
			<div className="result_block">
				<table id="table_result">
					<tbody>
					<tr>
						<td>1</td>
						<td>2</td>
					</tr>
					</tbody>
				</table>
				<ReactToExcel
					className="btn"
					table="table_result"
					filename="file"
					sheet="sheet 1"
					buttonText="export"
				/>
			</div>
		)
	}
}