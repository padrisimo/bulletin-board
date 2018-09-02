import React, { Component } from 'react';
import { FaTrash, FaPencilAlt, FaSave } from 'react-icons/fa';

export default class Note extends Component {
  state = {
    editing: false
  }

  componentWillMount = () => {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, 'px'),
      top: this.randomBetween(0, window.innerHeight - 150, 'px'),
      transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`
    }
  }
  

  randomBetween = (x, y, s) => (x + Math.ceil(Math.random() * (y-x)) + s);

  componentDidUpdate = (prevProps, prevState) => {
    this.state.editing && this._newText.focus() && this._newText.select() 
  }
  
  shouldComponentUpdate = (nextProps, nextState) => this.props.children !== nextProps.children || this.state !== nextState

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
    <div className="note" style={this.style}>
      <form onSubmit={this.save}>
        <textarea ref={input => this._newText = input} defaultValue={this.props.children} />
        <button id="save"><FaSave /></button>
      </form>
    </div>
  );

  renderDisplay = () => {
    return (
      <div className="note" style={this.style}>
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
