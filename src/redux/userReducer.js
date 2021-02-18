import { userAPI } from '../api/api';
import { setCountNotes, setDateLastTodo } from './noteReducer';
import Cookies from 'js-cookie';

const SET_USER_DATA = 'SET_USER_DATA'; 
const SET_iS_SIGN_UP = 'SET_iS_SIGN_UP';
const SET_AVATAR = 'SET_AVATAR';
const SET_NICKNAME = 'SET_NICKNAME';


let initialState = {
    id: null,
    login: null, 
    nickname: null,
    token: null,
    isAuth: false,
    isSignUp: false,
    avatar: null,
    notes: [],
    countNotes: null,
    dateLastNote: '',
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
        case SET_AVATAR: {
            return {
                ...state,
                avatar: action.avatar
            }
        }
        case SET_NICKNAME: {
            return {
                ...state,
                nickname: action.nickname
            }
        }
        default:
            return state;
    }
}

// action creators

export const setUserData = (id, login, nickname, token, isAuth) => ({
    type: SET_USER_DATA,
    id, login, nickname, token, isAuth
})

export const setSignUp = (isSignUp) => ({
    type: SET_iS_SIGN_UP,
    isSignUp
}) 

export const setAvatar = (avatar) => {
    return {
    type: SET_AVATAR,
    avatar
}}

export const setNickname = (nickname) => ({
    type: SET_NICKNAME,
    nickname
})


// thunk

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
        dispatch(getUserAvatar(data.id));
    }
}

export const login = (login, password) => async (dispatch) => {
    let response = await userAPI.login(login, password);
    console.log(login, password);
    console.log(response.data);
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
        dispatch(setAvatar(null));
        dispatch(setCountNotes(null));
        dispatch(setDateLastTodo(""));
    }
}

export const getUserAvatar = (id) => async (dispatch) => {
    let response = await userAPI.getUserAvatar(id);
    if (response.data.result === 'ok') {
        dispatch(setAvatar(response.data.data));
    } else {
        dispatch(setAvatar(null));
    }
} 

export const setUserAvatar = (avatar, id) => async (dispatch) => {
    let response = await userAPI.setUserAvatar(avatar, id);
    if (response.data.result === 'ok') {
        dispatch(getUserAvatar(id));
    }
}

export const getNickname = (id) => async (dispatch) => {
    let response = await userAPI.getNickname(id);
    if (response.data.result === 'ok') {
        dispatch(setNickname(response.data.data.nickname));
    }
}

export const changeNickname = (id, newNickname) => async (dispatch) => {
    let response = await userAPI.updateNickname(id, newNickname);
    if (response.data.result === 'ok') {
        dispatch(getNickname(id));
    }
}

export const changeAvatar = (id, newAvatar) => async (dispatch) => {
    let response = await userAPI.changeAvatar(newAvatar, id);
    if (response.data.result === 'ok') {
        dispatch(getUserAvatar(id));
    }
}

export const deleteAvatar = (id) => async (dispatch) => {
    let response = await userAPI.deleteAvatar(id);
    if (response.data.result === 'ok') {
        dispatch(setAvatar(null));
    }
}


export default userReducer;