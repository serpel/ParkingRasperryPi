import React, { Component } from 'react';
import AppBar from './Components/AppBar'
import List from './Components/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <List />
      </div>
    );
  }
}

export default App;
