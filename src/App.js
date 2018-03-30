import React, { Component } from 'react';
import { Button } from 'antd-mobile';

class App extends Component {
  render() {
    const { store } = this.props
    let num = store.getState()
    return (
      <div className="App">
        <h1>内容页面{num}</h1>
        <Button onClick={() => {
          // console.log(store.dispatch({type:'ADD'}))
          store.dispatch(dispatch=>{
            setTimeout(() => {
              dispatch({ type: 'ADD' })
            }, 3000);
          })
        }}>登录</Button>
      </div>
    );
  }
}

export default App;
