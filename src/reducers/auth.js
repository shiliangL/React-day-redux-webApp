
import * as types from '../actionTypes/index'
const init = {
    isAuth: false,
    user: 'shiliangl'
}
export default function auth(state = init, action) {
    switch (action.type) {
        case types.LOGIN:
            return { ...state, isAuth: true }
        case types.LOGOUT:
            return { ...state, isAuth: false }
        default:
            return state
    }
}