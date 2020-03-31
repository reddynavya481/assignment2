import React, { Component } from 'react'
import './SignUp.css'
import {Button,Input,Tooltip} from 'antd'
import 'antd/dist/antd.css';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
import Board from '../Board/Board'
import { UserOutlined ,InfoCircleOutlined} from '@ant-design/icons';
class SignUp extends Component {
    state = {
        username: '',
        password: '',
        click: false,
        board: [{
            name: "", stages: []
        }],
        tasks:[{board:"",stage:"",task:""}]
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        e.preventDefault()
    }
    registerHandler = () => {
        if (this.state.username === "" || this.state.password === "") {
            // NotificationManager.warning('Enter Credentials', '', 500);
            this.setState({ click: false })
        }
        else {
            if (!localStorage.getItem(this.state.username)) {
                this.setState({ click: true })
                localStorage.setItem(this.state.username, JSON.stringify(this.state))
                // NotificationManager.success('New account created!')
            }
            else {
                this.setState({ click: false })
                // NotificationManager.error('user already exists!', '', 3000, () => {
                //     alert('login if your account exists')
                // })
            }
        }
    }
    submitHandler = () => {

        if (this.state.username === "" || this.state.password === "") {
            // NotificationManager.warning('Enter Credentials', '', 500);
            this.setState({ click: false })
        }
        else {
            if (localStorage.getItem(this.state.username)) {
                let validity = JSON.parse(localStorage.getItem(this.state.username))
                if (validity.username === this.state.username && validity.password === this.state.password) {
                    // NotificationManager.success('login successful!')
                    this.setState({ click: true })
                }
                else {
                    this.setState({ click: false })
                    // NotificationManager.error('Wrong Credentials!', '', 3000);
                    alert("wrong crendentials! Try again")
                }
            }
            else {
                // NotificationManager.error('Please register yourself.Your account doesn\'t exist', '', 3000);
                this.setState({ click: false })
            }
        }
    }

    handleLogout = (e) => {
        this.setState({
            username: null,
            password: null,
            click: false
        });
    }
    render() {

        return (
            <div>
                {this.state.click ?
                    <div>
                        <Board username={this.state.username} onLogout={this.handleLogout}> </Board>
                    </div> :
                    <div style={{
                        backgroundColor: 'pink',
                        backgroundPosition: 'center'
                    }}>
                        <h2 align="center" >Sign Up</h2>
                        Username:<Input type="text" size="large" prefix={<UserOutlined />} suffix={
        <Tooltip title="Enter Username">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip> }
                        className="inputi" name="username" style={{width:'20%'}} onChange={this.inputChangeHandler} /><br />
                        Password:<Input.Password size="large" placeholder="enter password" name="password" onChange={this.inputChangeHandler} style={{width:'20%'}} /><br />
                        
                        <Button type="primary" onClick={this.submitHandler} style={{ marginLeft: '80px' }}>Login</Button>
                        <Button type="default" onClick={this.registerHandler} style={{ marginLeft: '7px' }} >Don't have an account?Register</Button>
                    </div>}
                {/* <NotificationContainer /> */}
            </div>
        )
    }
}

export default SignUp