import React, { Component } from 'react';
import NewTask from './component/NewTask'
import List from './component/List'


import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: []
    }
  }

  handleTask = (task) => {
    this.setState({ list: [ ...this.state.list, task]})
  }


  render() {
    return (
      <div className="App">
      <h1>My To-Do List: </h1>
      <NewTask add={ this.handleTask }/>
      <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
