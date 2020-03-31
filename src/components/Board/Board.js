import React, { Component } from 'react'
import AddBoard from '../Board/AddBoard'
import './Board.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class Board extends Component{
state={
    click:false,
    content:""
}
    handleClick=()=>
    {
        this.setState({click:!this.state.click})
    }
    handleGreet=()=>{
      this.setState({content:"Greeting Board"})
    }
    handleDone=()=>{
      this.setState({content:"task1-done"})
    }
    handleTodo(){
      this.setState({content:"task2-todo"})
    }
render(){
  let data=JSON.parse(localStorage.getItem(this.props.username))
  let content=this.state.content
    return(
        <div>
            <h1 style={{backgroundColor:'pink',height:'60px'}}>Hello {this.props.username}</h1>
            <button onClick={this.props.onLogout} className="LogoutBtn">LOG OUT</button>
            
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}>
          <SubMenu
            key="sub1"
            title={
              <span>
                Default
              </span>
            }
          >
            <Menu.Item key="1" onClick={()=>this.handleGreet}>Greeting !</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                Board
              </span>
            }
          >
            <Menu.Item key="2" onClick={()=>this.handleTodo}>Todo</Menu.Item>
            <Menu.Item key="3" onClick={()=>this.handleDone}>Done</Menu.Item>
          </SubMenu>
          </Menu>
      </Sider>
      <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }} 
        >
        {content}
        </Content>
    </Layout>
    
            <Button type="dashed" onClick={()=>this.handleClick()}>Create new board +</Button>
            {this.state.click?<AddBoard username={this.props.username}/> : null}
        </div>
    )
}
}

export default Board