import { SIGNUP, LOGIN, LOGOUT, SET_IS_AUTH, UPDATE_SESSION, SEARCH_RESULT } from './appActions'

const appReducer = (state, action) => {

    switch (action.type) {
        case LOGOUT:
            sessionStorage.clear();

        return {
            ...state,
            isAuth: false,
            user: {},
            token: ''
        };

        case LOGIN:
            function sessionSet(key, value, expirationInMin = 10) {
                let expirationDate = new Date(new Date().getTime() + (60000 * expirationInMin))
                let loggedInUser = {
                    user: value,
                    expirationDate: expirationDate.toISOString()
                }
                sessionStorage.setItem(key, JSON.stringify(value), 20)
                sessionStorage.setItem('expirationDate', expirationDate.toISOString());
                sessionStorage.setItem("isAuth", true);
            }
            sessionSet('user', action.payload.user, 20)
            sessionStorage.setItem('token', action.payload.token)
            
        return {
            ...state,
            isAuth: true,
            user: action.payload.user,
            token: action.payload.token
        };

        case UPDATE_SESSION: 

            sessionStorage.setItem('user', JSON.stringify(action.payload))
        return {
            ...state,
            user: action.payload
        }

        case SET_IS_AUTH: 
        return {
            ...state,
            isAuth: action.payload,
        };

        default:
            return state;

        case SEARCH_RESULT:
            sessionStorage.setItem('search', JSON.stringify(action.payload))
            return{
                ...state,
                search: action.payload
            }
    }
}

export default appReducer;