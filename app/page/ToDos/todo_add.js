import React, { Component } from "react";
export default class Todo_Add extends Component {
  render() {

    return (
      <div className="inner">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!this.input.value.trim()) {
              return;
            }
        

          }}
        >
          <input
            type="text"
            placeholder="React-Redux Todolist"
            ref={node => {
              this.input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
