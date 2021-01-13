import { getUserByToken } from './userReducer';
import Cookies from 'js-cookie';

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
      case INITIALIZED_SUCCESS: {
        return {
          ...state,
          initialized: true
        }
      }
      default:
          return state;
    }
}


export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });



export const initializeApp = () => (dispatch) => {
    let token = Cookies.get('token');
    if (token) {
        dispatch(getUserByToken(token));
        dispatch(initializedSuccess());
    }
}


export default appReducer;  