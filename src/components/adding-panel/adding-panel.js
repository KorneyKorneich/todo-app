import React, { Component } from "react";


export default class AddingPanel extends Component {

  state = {
    label: '',
  }
  
  onItemChange = (e) => {
    this.setState({
      label: e.target.value  
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label:''
    });
  };

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <input onChange = {this.onItemChange}
        placeholder="type here..."
        value={this.state.label}></input>
        <button
        className="addingButton btn">
        Add</button>
      </form>
    );
  };
};