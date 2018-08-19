import React, { Component } from 'react';
import Note from './Note';

export default class Board extends Component {
  state = {
    notes: [
      {
        id: 33,
        note: "kill humans"
      },
      {
        id: 34,
        note: "build robots"
      }
    ]
  }

  eachNote = (note, i) => (
    <Note key={note.id}
      index={i}>
      {note.note}
    </Note>
  );

  render() {
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
      </div>
    )
  }
}
