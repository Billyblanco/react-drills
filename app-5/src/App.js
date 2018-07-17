import React, { Component } from 'react';
import './App.css';
import Image from './component/Image'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Image imageUrl='https://images2.memedroid.com/images/UPLOADED39/516b505f4235c.jpeg'/>
      </div>
    );
  }
}

export default App;
