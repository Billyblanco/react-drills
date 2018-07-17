import React, { Component } from 'react';
import './App.css';
import ToDo from './component/ToDo'

class App extends Component {
  constructor () {
    super()

    this.state = {
      userinput: '',
      list: []
    }
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState({
      userInput: e.target.value
    })
  }

  handleAdd = () => {
    let list = this.state.list.slice()
      list.push(this.state.userInput)
      this.setState({
        list: list
      })
    
  }


  render() {
    let list= this.state.list.map( (element, index) => {
      return (
        <ToDo key={index} addItem={element}/>
      )
    }
  )
console.log(this.state.list)

    return (
      <div className="App">
          <h1>My TO-DO List:</h1>
        <input onChange={this.handleChange} ></input>
        <button onClick={this.handleAdd}>Add</button>
        { list }
      </div>
    )
  }
}

export default App;
