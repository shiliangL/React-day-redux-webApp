import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  console.log(state)
  return {
    storeVla: state
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    toAdd: () => {
      setTimeout(() => {
        dispatch({ type: 'ADD' })
      }, 2000);
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>内容页面{this.props.storeVla}</h1>
        <Button onClick={() => {
          console.log(this.props.toAdd())
        }}>登录</Button>
      </div>
    );
  }
}
export default App
// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
