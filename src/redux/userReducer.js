import { userAPI } from '../api/api';
import Cookies from 'js-cookie';

const SET_USER_DATA = 'SET_USER_DATA'; 
const SET_iS_SIGN_UP = 'SET_iS_SIGN_UP';
const SET_AVATAR = 'SET_AVATAR';
const SET_NOTES = 'SET_NOTES';
const SET_ONE_NOTE = 'SET_ONE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

let initialState = {
    id: null,
    login: null, 
    nickname: null,
    token: null,
    isAuth: false,
    isSignUp: false,
    avatar: null,
    notes: null
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
        case SET_NOTES: {
            return {
                ...state,
                notes: action.notes
            }
        }
        case SET_ONE_NOTE: {
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        }
        case DELETE_NOTE: {
            return {
                ...state,
                notes: [...state.notes.filter(note => note.id !== action.noteId)]
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

export const setAvatar = (avatar) => ({
    type: SET_AVATAR,
    avatar
})

export const setNotes = (notes) => ({
    type: SET_NOTES,
    notes
})

export const setOneNote = (note) => ({
    type: SET_ONE_NOTE,
    note
})

export const deleteNoteFromState = (noteId) => ({
    type: DELETE_NOTE,
    noteId
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

export const getUserAvatar = (id) => async (dispatch) => {
    let response = await userAPI.getUserAvatar(id);
    console.log(response);
    if (response.data.result === 'ok') {
        dispatch(setAvatar(response.data.data.image));
    }
} 

export const setUserAvatar = (avatar, id) => async (dispatch) => {
    let response = await userAPI.setUserAvatar(avatar, id);
    console.log(response);
    if (response.data.result === 'ok') {
        dispatch(getUserAvatar(id));
    }
}

export const addNote = (id, title, message) => async (dispatch) => {
    let response = await userAPI.addNote(id, title, message);
    let data = response.data.data;
    if (response.data.result === 'ok') {
        dispatch(setOneNote(data));
    }
}

export const getAllNotes = (id) => async (dispatch) => {
    let response = await userAPI.getAllNotes(id);
    let data = response.data.data;
    if (response.data.result === 'ok') {
        dispatch(setNotes(data));
    }
}


export const deleteNote = (noteId) => async (dispatch) => {
    let response = await userAPI.deleteNote(noteId);
    if (response.data.result === 'ok') {
        dispatch(deleteNoteFromState(noteId));
    }
}


export default userReducer;
