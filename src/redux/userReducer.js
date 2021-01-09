import { userAPI } from '../api/api';
import Cookies from 'js-cookie';

const SET_USER_DATA = 'SET_USER_DATA'; 
const SET_iS_SIGN_UP = 'SET_iS_SIGN_UP';


let initialState = {
    id: null,
    login: null, 
    nickname: null,
    token: null,
    isAuth: false,
    isSignUp: false,
    avatar: null,
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                id: Number(action.id),
                login: action.login,
                nickname: action.nickname,
                token: action.token,
                isAuth: action.isAuth,
            }
        }
        case SET_iS_SIGN_UP: {
            return {
                ...state,
                isSignUp: action.isSignUp
            }
        }
        default:
            return state;
    }
}


export const setUserData = (id, login, nickname, token, isAuth) => ({
    type: SET_USER_DATA,
    id, login, nickname, token, isAuth
})

export const setSignUp = (isSignUp) => ({
    type: SET_iS_SIGN_UP,
    isSignUp
}) 

export const signUp = (login, password, nickname) => async (dispatch) => {
    let response = await userAPI.signUp(login, password, nickname);
    if (response.data.result === 'ok') {
        dispatch(setSignUp(true));
    }
}

export const getUserByToken = (token) => async (dispatch) => {
    let response = await userAPI.getUserByToken(token);
    const data = response.data.data;
    if (response.data.result === 'ok') {
        dispatch(setUserData(data.id, data.login, data.nickname, data.token, true));
    }
}

export const login = (login, password) => async (dispatch) => {
    let response = await userAPI.login(login, password);
    console.log(response.data.result);
    if (response.data.result === 'ok') {
        dispatch(getUserByToken(response.data.data));
        Cookies.set('token', response.data.data, { expires: 2 });
    }
}

export const logout = (token) => async (dispatch) => {
    let response = await userAPI.logout(token);
    if (response.data.result === 'ok') {
        Cookies.remove('token');
        dispatch(setUserData(null, null, null, null, false));
    }
}



export default userReducer;
