import React, { Component } from 'react';
import { FaTrash, FaPencilAlt, FaSave } from 'react-icons/fa';

export default class Note extends Component {
  state = {
    editing: false
  }

  edit = () => {
    this.setState({editing: true})
  }

  remove = () => {
    alert('remove')
  }

  save = () => {
    alert(this._newText.value);
  };

  renderForm = () => (
    <div className="note">
      <form>
        <textarea ref={input => this._newText = input} />
        <button onClick={this.save}><FaSave /></button>
      </form>
    </div>
  );

  renderDisplay = () => {
    return (
      <div className="note">
        <p>note stuff</p>
        <span>
          <button onClick={this.remove} id="remove"><FaTrash /></button>
          <button onClick={this.edit} id="edit"><FaPencilAlt /></button>
        </span>
      </div>
    )
  }

  render(){
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}
