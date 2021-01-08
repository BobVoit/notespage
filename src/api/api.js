import * as axios from "axios";


export const userAPI = {
    signUp(login, password, nickname) {
        return axios({
            method: 'POST',
            url: "http://proger25/api/index.php?",
            params: {
                method: 'registration',
                login, password, nickname
            }
        })
    },
    login(login, password) {
        return axios({
            method: 'POST',
            url: "http://proger25/api/index.php?",
            params: {
                method: 'login',
                login, password
            }
        })
    },
    logout(token) {
        return axios({
            method: 'POST',
            url: "http://proger25/api/index.php?",
            params: {
                method: 'logout',
                token
            }
        })
    },
    getUserByToken(token) {
        return axios({
            method: 'GET',
            url: "http://proger25/api/index.php?",
            params: {
                method: 'getuserbytoken',
                token
            }
        })
    }
}