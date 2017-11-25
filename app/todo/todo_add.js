import React, { Component } from "react";
import { AddToDo } from "../redux/action/index";

import { connect } from "react-redux";
import todos from "../redux/reducers/index";
 class Todo_Add extends Component {
  handleClick(e) {
    console.log(this.props);
    const { dispatch } = this.props
    e.preventDefault();
    if (this.input.value.trim() === '') return
    dispatch(AddToDo(this.input.value));
    this.input.value = "";
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={node => {
            this.input = node;
          }}
        />
        <button onClick={e => this.handleClick(e)}>Add</button>
      </div>
    );
  }
}

export default connect()(Todo_Add);