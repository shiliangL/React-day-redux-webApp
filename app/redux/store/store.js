import { createStore } from 'redux'

export default function(){
//定义规则 既 reducer
  function counter(state = 0,action){
    switch (action.type){
      case 'ADD_TYPE' :
      {
        return state + 1
      }
      case 'DEL_TYPE':
      {
        return state - 1
      }
      default:
      return state 
    }
  }

  //生成 store 
  let store = createStore(counter)

  //定义派发规则
  store.subscribe(()=>{
    console.log('fi--> 当前 state ',store.getState())
  })
// 触发规则
  store.dispatch({type:'ADD_TYPE'})

}