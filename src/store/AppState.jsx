import { useReducer } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import { SIGNUP, LOGIN, LOGOUT, SET_IS_AUTH, UPDATE_SESSION, SEARCH_RESULT } from "./appActions";

let userLoad = JSON.parse(sessionStorage.getItem('user'))
let userToken = sessionStorage.getItem('token')
let userSearch = JSON.parse(sessionStorage.getItem('search'))

const initialState = {
    isAuth: userLoad ? true : false,
    // messages: [], // {id:1, content: "", title:"", type:"",timeout:5000}
    user: userLoad,
    token: userToken,
    search: userSearch
};

const AppState = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const login = (user) => {
        dispatch({
            type: LOGIN,
            payload:user
        });
    };
  
    const logout = () => {
        dispatch({
            type:LOGOUT
        });
    };

    const setIsAuth = (isAuth) => {
        dispatch({
            type: SET_IS_AUTH,
            payload:isAuth
        })
    };

    const updateSession = (user) => {
        dispatch({
            type: UPDATE_SESSION,
            payload: user
        })
    }

    const userSearch = (userSearch) => {
        dispatch({
            type: SEARCH_RESULT,
            payload: userSearch
        })
    }

    return (
        <AppContext.Provider value={{ ...state, login, logout, setIsAuth, updateSession, userSearch }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppState;