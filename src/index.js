import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore,compose } from 'redux'
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import AuthPage  from './view/AuthPage';
import Dashboard from './view/Dashboard';

import appReducer from './reducers/index.js'
const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
    appReducer,
    devtool,
    compose(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route path='/login' exact component={AuthPage}></Route>
                    <Route path='/Dashboard' component={Dashboard}></Route>
                    <Redirect to='/Dashboard'></Redirect>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
 