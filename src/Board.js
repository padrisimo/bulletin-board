import React, { Component } from 'react';
import Note from './Note';
import { FaPlus } from 'react-icons/fa';

export default class Board extends Component {
  state = {
    notes: []
  }

  componentWillMount = () => {
    if(this.props.count){
      fetch(`https://baconipsum.com/api/?type=all-meat&sentences=50`)
        .then(response => response.json())
        .then(json => json[0].split('. ').map(sentence => this.add(sentence.substring(0, 25))))
    }
  }
  

  add = text => {
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          id: this.nextId(),
          note: text
        }
      ]
    }) )
  }

  nextId = () => {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
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
        <button  id="add" onClick={this.add.bind(null, "new note!!")}><FaPlus /></button>
      </div>
    )
  }
}
