import React, { Component } from 'react';
import { FaTrash, FaPencilAlt, FaSave } from 'react-icons/fa';

export default class Note extends Component {
  state = {
    editing: false
  }

  edit = () => {
    this.setState({ editing: true })
  }

  remove = () => {
   this.props.onRemove(this.props.index)
  }

  save = (e) => {
    e.preventDefault();
    this.props.onChange(this._newText.value, this.props.index)
    this.setState({ editing: false });
  };

  renderForm = () => (
    <div className="note">
      <form onSubmit={this.save}>
        <textarea ref={input => this._newText = input} />
        <button id="save"><FaSave /></button>
      </form>
    </div>
  );

  renderDisplay = () => {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.remove} id="remove"><FaTrash /></button>
          <button onClick={this.edit} id="edit"><FaPencilAlt /></button>
        </span>
      </div>
    )
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}
