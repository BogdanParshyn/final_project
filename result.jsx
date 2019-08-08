import React from 'react';
import "./style.css"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
export default class Result extends React.Component{
	constructor(){
		super();
		
	}
	
	render(){
		return(
			<div className="result_block">
				<ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
               
			</div>
		)
	}
}