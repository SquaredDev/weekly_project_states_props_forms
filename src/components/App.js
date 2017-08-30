import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
import NavBar from './NavBar';
import PlayList from './PlayList'
import PlayListForm from './PlayListForm'
import PlayListItem from './PlayListItem'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <PlayListForm/>
        <PlayList/>
        <PlayListItem/>
      </div>
    );
  }
}

export default App;
