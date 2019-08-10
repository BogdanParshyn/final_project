import React from 'react';
import "./style.css"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
var today = new Date();
export default class Result extends React.Component{
	
	render(){
		return(
			<div className="result_block">
				<ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download_table"
                    table="table-to-xls"
                    filename="report"
                    sheet="table"
                    buttonText="Download"/>
			</div>
		)
	}
}