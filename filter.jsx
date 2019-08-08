import React from 'react';
import "./style.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
var boxes=[];
	function isObject(obj) {
		return obj === Object(obj);
	}
export default class Filter extends React.Component{
	constructor(){
		super();
		this.state={
			checkBoxes:'',
			stringChoice:'',
			checked_true: true,
			boxes_result:[],
			boxes_request:[],
			btn_visible:'none',
		}
		this.onChoice=this.onChoice.bind(this)
		this.onBuild=this.onBuild.bind(this)
		this.onBuildTable=this.onBuildTable.bind(this)
	}
	
	componentDidUpdate(prevProps){
		if(prevProps.choiceAPI!==this.props.choiceAPI)
		{	
			this.onBuild();
		}
	}
	onBuild(){
			this.setState({
				checkBoxes:[],
				stringChoice:'',
				checked_true: true,
				boxes_result:[],
				boxes_request:[],
				btn_visible:'none',
				box_result:[]
			});
			boxes=[];
			fetch(this.props.choiceAPI,{method: 'GET'})
					.then(res=>res.json())
					.then(res=>{
						for(var key in res) {
							var value = res[key];
							var k=0;
							if(isObject(value)==true){
								for(var key in value) {
									var result = value[key];
									if(typeof result !=='object'){
										k++;
										boxes=boxes+key+',';
									}
								}
								break;
							}
							
						}
						this.setState({
							boxes_result:boxes.split(',',k),
						});
						this.setState({
							checkBoxes:[],
							btn_visible:'none'
						});
						this.setState({
							checkBoxes:this.state.boxes_result.map((box_result)=>
								<li style={{listStyleType: "none"}} key={box_result}>
									<input defaultChecked={false} type="checkbox" value={box_result}/>
									{box_result}
								</li>
							),
							btn_visible:'block',
						});
					}
				)
				.catch(error=>{
					this.setState({
						checkBoxes: "Проверьте интернет соединение"
					});
					}
				);
	}
	onChoice(){
		if(event.target.checked==true){
			for(let q=0; q<this.state.boxes_result.length; q++){
				if(event.target.value===this.state.boxes_result[q]){
					this.state.boxes_request.splice(q,0,event.target.value)
					break;
				}
			}
		}
		else
			if(event.target.checked==false){
				for(let i=0;i<this.state.boxes_request.length;i++){
					if(event.target.value===this.state.boxes_request[i]){
						this.state.boxes_request.splice(i,1)
					}
				}
			}			
		console.log(this.state.boxes_request);
	}
	onBuildTable(){
			this.props.updateBuild(this.state.boxes_request);	
	}
	render(){
		return(
			<div className="filter_block">
				<Button variant="light" className="btn_build" style={{display:this.state.btn_visible }} onClick={this.onBuildTable}>
					Build table
				</Button>
				<div onChange={this.onChoice} className="checkGroup" style={{display:this.state.div_visible }}>
				
					<ButtonGroup vertical>
						{this.state.checkBoxes}
					</ButtonGroup>
				</div>
			</div>
		)
		
	}
}
