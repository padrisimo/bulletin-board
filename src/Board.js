import React, { Component } from 'react';
import Note from './Note';

export default class Board extends Component {
  state = {
    notes: [
      {
        id: 0,
        note: "kill humans"
      },
      {
        id: 1,
        note: "build robots"
      }
    ]
  }

  update = (newText, i) => {
    console.log('updating item');
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !== i) ? note : { ...note, note: newText }
      )
    }))
  }

  remove = (id) => {
    console.log('removing item id', id)
    this.setState(prevState => ({ notes: prevState.notes.filter(note => note.id !== id) }))
  }

  eachNote = (note, i) => (
    <Note key={note.id}
      index={i}
      onRemove={this.remove}
      onChange={this.update}>
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
