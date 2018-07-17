import React, { Component } from 'react'

class Login extends Component {
    constructor () {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }
handleUpdateUsername = (event) => {
    this.setState({
        username: event.target.value
    })
}

handleUpdatePassword = (event) => {
    this.setState({
        password: event.target.value
    })
}

handleLogin = () => {
    alert (`Username: ${this.state.username} Password: ${this.state.password}`)
}

render () {
    console.log(this.state.username)
    console.log(this.state.password)
    return (
        <div className="login">
            <input className="username" 
            onChange={this.handleUpdateUsername}></input>
            <input className="password" 
            onChange={this.handleUpdatePassword}></input>
            <button className="alert" 
            onClick={ this.handleLogin }></button>
        </div>
    )
  }
}

export default Login