import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configStore(initialState) {
    const store = createStore(rootReducer, initialState,window.devToolsExtension ? window.devToolsExtension() : undefined)
    return store
}