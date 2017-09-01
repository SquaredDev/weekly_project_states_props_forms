import React, { Component } from 'react';
import PlayListItem from './PlayListItem';

class PlayList extends Component {
  state = {songs:[]}
  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  }

  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }

  render() {
    return (
      <div className="PlayList">
      <br/>
        <button onClick={this.fetchData} >Update List</button>
        {this.state.songs.map(function (playListItem) {
          return <PlayListItem item={playListItem}/>
        })}
      </div>
    );
  }
}

export default PlayList;
