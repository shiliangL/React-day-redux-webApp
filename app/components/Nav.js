import React, { Component } from 'react'
import { hashHistory } from 'react-router'

export default class Nav extends Component {
  handleClick(item){
    hashHistory.push(item.path)
  }
  render() {
    const Nav =[
      {
        text:'首页',
        path:'/'
      },
      {
        text:'热门',
        path:'/adlist'
      },
      {
        text:'列表',
        path:'/list'
      },
      {
        text:'我的',
        path:'/center'
      }]
    return (
      <div className="NavBar">
        <div className="NavText">
          { 
            
            Nav.map((item,index) =>{
              return <div key={index} onClick={this.handleClick.bind(this,item)}> {item.text} </div>
            })
          
          }
        </div>
      </div>
    )
  }


}

