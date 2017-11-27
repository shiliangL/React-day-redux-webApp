import React, { Component } from "react";
import { connect } from "react-redux";

const TodoList = ({ todoList }) => {
  return (
    <ul className="dodo-list">
      {todoList.map((item, index) => {
        return (
          <p key={item.id} onClick={() => onTodoList()}>
            {item.text}
          </p>
        );
      })}
    </ul>
  );
};

//将 state 中的值映射到 prps 中去
const mapStateToProps = state => {
  return { todoList: state.todos };
};

// 猜测 将方法 触发到组件中
const mapDispatchToProps = dispatch => {
  return {
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
