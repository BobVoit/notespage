import { userAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA'; 
const SET_iS_SIGN_UP = 'SET_iS_SIGN_UP';


let initialState = {
    id: null,
    login: null, 
    nickname: null,
    token: null,
    isAuth: false,
    isSignUp: false
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                id: action.id,
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
    if (response.data.result === 'ok' && response.data.data === true) {

    }
}



export default userReducer;
