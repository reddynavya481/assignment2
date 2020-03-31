import React, { Component } from 'react'
import AddTask from './AddTask'
import {Input,Button} from 'antd'
class AddBoard extends Component{
    state={
        name:"",
        showboard:false,
        addtask:false
    }
    inputChangeHandler=(e)=>{
        this.setState({name:e.target.value})
        
    }
    createBoard=()=>{
        let data=JSON.parse(localStorage.getItem(this.props.username))
        console.log(data)
        let item={
            name:this.state.name,
            stages:[]
        }
        data.board.push(item)
    localStorage.setItem(this.props.username,JSON.stringify(data))
    // this.setState({showboard:true})
    }
    addTask=()=>{
        this.setState({addtask:true})
    }

    render(){
        return(
            <div>
                <Input type="text" placeholder="name your board" value={this.state.name} onChange={this.inputChangeHandler}/>
                <Button onClick={this.createBoard}>create!</Button>
                {/* <div>
                {this.state.showboard?
                <button onClick={this.addTask}>{this.state.name}</button>:null}
                </div>
                {this.state.addtask?
                <AddTask stagename={this.item.stages[0]} boardname={this.state.name}/>:null} */}
            </div>
        )
    }
}
export default AddBoard