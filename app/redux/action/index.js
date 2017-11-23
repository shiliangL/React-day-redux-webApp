import * as actionTypes from "../actionTypes/actionTypes";
const nextToDoID = 0

// 一跳数据的 action ADD
const AddToDo = ( text ) =>{
  return {
      type: actionTypes.ADD_TODO,
      id: nextToDoID++,
      text
  }
}

