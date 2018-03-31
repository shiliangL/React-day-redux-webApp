import React, { Component } from 'react'
import { connect } from 'react-redux'

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import Title from './Title';
import Home from './Home';
import Exchange from './Exchange';
import Expansion from './Expansion';
import Login from './Login'
// import NoFound from './NoFound';
@connect(
    state => state
)
export default class Dashboard extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                {this.props.auth.isAuth ? <Showpage></Showpage> : <Login></Login>}
            </div>
        )
    }
}

//登录后显示页面
const Showpage = ()=>{
    return <div>
        <ul className="indexNav">
            <li>
                <Link to='/Dashboard'>首页</Link>
            </li>
            <li>
                <Link to='/Dashboard/title'>好文</Link>
            </li>
            <li>
                <Link to='/Dashboard/exchange'>交流</Link>
            </li>
            <li>
                <Link to='/Dashboard/expansion'>拓展</Link>
            </li>
        </ul>
        <div>
            <Route path='/Dashboard' exact component={Home}></Route>
            <Route path='/Dashboard/title' component={Title}></Route>
            <Route path='/Dashboard/exchange' component={Exchange}></Route>
            <Route path='/Dashboard/expansion' component={Expansion}></Route>
        </div>
    </div>
}