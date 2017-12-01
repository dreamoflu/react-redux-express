import React, { Component } from 'react';
import {Button,List} from 'antd-mobile'


class App extends Component{
  render(){
    let boss = '李云龙'
    return(
      <div>
       <div>独立团团长：{boss}</div>
      <Yiying name='还这么麻烦'/>
      </div>
      
    )
  }
}

class Yiying extends Component{ 
  constructor(props){
    super(props)
    this.state={
      solders:['1','2','3','4']
    }
  };
  add(){
    this.setState({
      solders:[...this.state.solders,Math.random()]
    })
   
  };
  render(){
  
    return(
      <div> 
       <div>一营营长：{this.props.name}</div>
       <Button type="primary" onClick={this.add.bind(this)}>新增士兵</Button>
       <List renderHeader={()=>'士兵列表'}>
         {this.state.solders.map(item=>(
           <List.Item key={item}>{item}</List.Item>
         ))}
         </List>
       <ul>
      
         {this.state.solders.map(item =>(
           <li key={item}>{item}</li> 
         ) )}
       </ul>
      </div> 
     
    )
  }
}

export default App;
