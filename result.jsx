import React from 'react';
import "./style.css"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
var today = new Date();
export default class Result extends React.Component{
	
	render(){
		return(
			<div className="result_block">
				<div className="btn_save">
				<ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="bot9"
                    table="table-to-xls"
                    filename="report"
                    sheet="table"
                    buttonText="Download"/>
				</div>
			</div>
		)
	}
}

