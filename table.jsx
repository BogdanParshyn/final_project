import React from 'react';
import "./style.css"
let report_table=[];
import Table from 'react-bootstrap/Table';
import Preloader from './images/Ring-Preloader.gif';
function isObject(obj) {
		return obj === Object(obj);
	}
export default class ResultTable extends React.Component{
	constructor(){
		super();
		this.state={
			data:[],
			final_table:[],
			table_visible:"none",
			head_table:[],
			preloader_visible:'none'
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
				final_table:[],
				head_table:[],
				preloader_visible:'none'
			});
			report_table=[];
						this.setState({
							preloader_visible:'block'
						})
		fetch(this.props.choiceAPI,{method: 'GET'})
					.then(res=>res.json())
					.then(res=>{
						
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
							head_table:this.props.boxes_request.map((cols)=><th>{cols}</th>),
							final_table: report_table.map((row)=><tr>
								{row.map((cols)=>
								<td>
									{cols}
								</td>)}
							</tr>)
						})
						this.setState({
							preloader_visible:'none'
						})
					});
					
					
	}
	render(){
		return(
			<div className="table_block">
				<div className="preloader" style={{display: this.state.preloader_visible}}>
					<img src={Preloader} style={{marginLeft:"22%",marginTop:"8%", width:"50%", height:"70%"}}></img>
				</div>
				<div className="tableOut" style={{display: this.state.table_visible}}>
					<Table striped bordered hover id="table-to-xls">
						<thead style={{backgroundColor: "#D7DDE5"}}>
							<tr>{this.state.head_table}</tr>
						</thead>
						<tbody>
							{this.state.final_table}
						</tbody>
					</Table>
				</div>
				
			</div>
		)
	}
}