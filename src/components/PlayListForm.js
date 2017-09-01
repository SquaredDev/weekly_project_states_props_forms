import React, { Component } from 'react';


class PlayListForm extends Component {
  state = {
    userName : "",
    songArtist : "",
    songTitle : "",
    songNotes : ""
  }

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

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <div className="PlayListForm">
        <h1>PlayListForm</h1>
        <form onSubmit={this.addToList}>
          User Name: <br/>
          <input type="text" onChange={this.handleChange} value={this.state.userName} name="userName" placeholder="Name or User Name" /><br/>
          Artist / Band: <br/>
          <input type="text" onChange={this.handleChange} value={this.state.songArtist} name="songArtist" placeholder="Artist or Band" /><br/>
          Song Title: <br/>
          <input type="text" onChange={this.handleChange} value={this.state.songTitle} name="songTitle" placeholder="Song Title" /><br/>
          Notes about Song: <br/>
          <input type="text" onChange={this.handleChange} value={this.state.songNotes} name="songNotes" placeholder="" /><br/><br/>
          <button type="submit">Add</button><br/>
        </form>
      </div>
    )
  }
}

export default PlayListForm;
