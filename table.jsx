import React from 'react';
import "./style.css"
let report_table=[];
function isObject(obj) {
		return obj === Object(obj);
	}
export default class Table extends React.Component{
	constructor(){
		super();
		this.state={
			data:[],
			final_table:[],
			table_visible:"none"
		}
		this.buildTable=this.buildTable.bind(this)
	}
	componentDidUpdate(prevProps){
		if(prevProps.boxes_request!==this.props.boxes_request){
			this.buildTable()
		}
	}
	buildTable(){
			this.setState({
				data:[],
				final_table:[]
			});
			report_table=[];
		
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
						this.setState({
							table_visible: "block",
							final_table: report_table.map((row)=>
								<tr>{row} </tr>
							)
						})
						for(let i=0;i<report_table.length;i++){
							for(let j=0;j<report_table[i].length;j++){
								console.log(report_table[i][j]+'\n')
							}
						}
					});
				
	}
	render(){
		return(
			<div className="table_block">
				<div className="tableOut" style={{display: this.state.table_visible}}>
					<table>{this.state.final_table}</table>
				</div>
			</div>
		)
	}
}