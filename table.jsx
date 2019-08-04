import React from 'react';
import "./style.css"
var report_table=[];
function isObject(obj) {
		return obj === Object(obj);
	}
export default class Table extends React.Component{
	constructor(){
		super();
		this.state={
			report_table:[],
			data:[]
		}
		this.buildTable=this.buildTable.bind(this)
	}
	componentDidUpdate(prevProps){
		if(prevProps.boxes_request!==this.props.boxes_request){
			this.buildTable()
		}
	}
	buildTable(){
		report_table=[];
		this.setState({
			report_table:[],
			data:[]
		});
		fetch(this.props.choiceAPI,{method: 'GET'})
					.then(res=>res.json())
					.then(res=>{
						report_table.push(this.props.boxes_request)
						for(var key in res) {
							var value = res[key];
							if(isObject(value)==true){
								for(var key in value) {
									var result = value[key];
									this.setState({
										data: this.props.boxes_request.map(key => value[key])
									});
								}
								
								report_table.push(this.state.data)
								
							}
						
						}
					});
					console.log(report_table)
					
	}
	
	render(){
		return(
			<div className="table_block">
			</div>
		)
	}
}