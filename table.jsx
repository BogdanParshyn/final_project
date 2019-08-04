import React from 'react';
import "./style.css"
function isObject(obj) {
		return obj === Object(obj);
	}
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
		fetch(this.props.choiceAPI,{method: 'GET'})
					.then(res=>res.json())
					.then(res=>{
						for(var key in res) {
							var value = res[key];
							if(isObject(value)==true){
								for(var key in value) {
									var result = value[key];
										var data = [
											this.props.boxes_request,
											this.props.boxes_request.map(key => value[key])
										]
									console.log(data)
								}
							}
						}
					});
	}
	
	render(){
		return(
			<div className="table_block">
			</div>
		)
	}
}