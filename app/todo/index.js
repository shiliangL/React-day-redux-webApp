import React from "react";
import Todo_Add from "./todo_add";
import TodoList from "./todo_list";
import Todo_Footer from "./todo_footer";
const Index = ()=>{
    return <div>
        <Todo_Add />
        <TodoList />
        <Todo_Footer />
      </div>;
}

export default Index;