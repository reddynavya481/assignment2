import React, { Component } from 'react'

class AddTask extends Component{
    state={
        taskname:""
    }
    taskHandler=(e)=>{
        this.setState({task:e.target.value})
        let tasks={
            taskname:this.state.task,
        }
        let data=JSON.parse(localStorage.getItem(this.props.username))
         localStorage.setItem(this.props.username,JSON.stringify(data))
    }
render(){
    return(
        <div>
             <input type="text" placeholder="Add Task" value={this.state.task} onChange={this.taskHandler}/>
        </div>
    )
}


}
export default AddTask