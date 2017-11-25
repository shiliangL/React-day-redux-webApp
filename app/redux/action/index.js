
let nextToDoID = 0
// action 是指代一些抽象的行为
// 一跳数据的 action ADD 
export const AddToDo = ( text ) =>{
  return {
      type: 'ADD_TODO',
      id: nextToDoID++,
      text
  }
}

export const setVisibility = (filter) => {
    return {
        type: 'SET_VISIBILITY',
        filter
    }
}

export const toggleTodo = ( id ) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
export const deleteTodo = ( id ) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}