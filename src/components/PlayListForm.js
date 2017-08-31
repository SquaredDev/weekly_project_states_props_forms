import React, { Component } from 'react';
// 
// //******************************************************************************
// //******************************************************************************
// //copy and paste into componentDidMount in your PlayList component.
// componentDidMount (props) {
//   fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
//         return results.json();
//       }).then(data => {
//         this.setState({songs: data});
//         console.log("state", this.state.songs);
//       })
// }
//
// fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
//       return results.json();
//     }).then(data => {
//       this.setState({songs: data});
//       console.log("state", this.state.songs);
//     })
//
//
// //Also in your PlayList component you should have a function that manually updates
// //the playlist when a user presses a button. Use the following "fetchData" function
// //to manually update your playlist.
//
// fetchData = (e) => {
//     e.preventDefault();
//     fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
//       return results.json();
//     }).then(data => {
//       this.setState({songs: data});
//     })
//   }
//
//   //In your PlayListForm component you should have a addToList function that happens
//   //when the form is submitted.
//   //This expression or method (dependin on the syntax you choose) will be comparable to this:

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

class PlayListForm extends Component {
  render() {
    return (
      <div className="PlayListForm">
        <h1>PlayListForm</h1>
        <form onSubmit="">
          User Name: <br/>
          <input type="text" value={this.state.userName} placeholder="Name or User Name" /><br/>
          Artist / Band: <br/>
          <input type="text" value={this.state.songArtist} placeholder="Artist or Band" /><br/>
          Song Title: <br/>
          <input type="text" value={this.state.songTitle} placeholder="Song Title" /><br/>
          Notes about Song: <br/>
          <input type="text" value={this.state.songNotes} placeholder="" /><br/>
          <button type="submit">Add</button><br/>
        </form>
      </div>
    );
  }
}

export default PlayListForm;
