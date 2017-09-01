import React, { Component } from 'react';


class PlayListItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="PlayListItem">
        <br/>
        <h3> Play List Song</h3>
        <ul>
          <li>User: {this.props.item.userName}</li>
          <li>Artist: {this.props.item.songArtist}</li>
          <li>Title: {this.props.item.songTitle}</li>
          <li>Notes: {this.props.item.songNotes}</li>
        </ul>
      </div>
    )
  }
}

export default PlayListItem;

// userName: "does", songArtist: "this", songTitle: "work", songNotes: "???"}
