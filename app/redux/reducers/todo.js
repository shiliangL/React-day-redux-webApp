// 处理单挑数据
import * as actionTypes from "../actionTypes/actionTypes";
//处理行为 然后吐出 stroe 的 reducers
const todo = (state, action) => {
  switch (state.type) {
    case actionTypes.ADD_TODO:
      return { id: action.id, text: action.text, completed: false };

    case actionTypes.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, { completed: !state.completed });

    default:
      return state;
  }
};

// 处理整个列表数据
export default todos = ( state=[], action  ) =>{
    switch ( action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                todo( undefined, action)
            ]
        case actionTypes.TOGGLE_TODO:
            return state.map( t=>{
               todo( t, action)
            })
        case actionTypes.DELETE_TODO:
            return state.filters( t=>{
               t .id !== action.id
            })
        default:
            return state
    }
}