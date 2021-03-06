import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import PlayList from './PlayList'
import PlayListForm from './PlayListForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <PlayListForm/>
        <PlayList/>
      </div>
    );
  }
}

export default App;
