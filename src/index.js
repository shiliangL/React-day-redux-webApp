import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore,compose } from 'redux'
import thunk from 'redux-thunk';


function counter(state = 10, action) {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'DEL':
            return state - 1
        default:
            return state;
    }
}
const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
    counter,
    devtool,
    compose(applyMiddleware(thunk))
)

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root'));
registerServiceWorker();
