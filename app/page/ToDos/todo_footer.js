import React, { Component } from "react";
export default class Todo_Footer extends Component {
  render() {
    return (
      <p className="footer">
        <span> 全部 </span>
        <span> 未完成 </span>
        <span> 完成 </span>
      </p>
    );
  }
}
