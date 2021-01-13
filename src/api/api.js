import * as axios from "axios";
import FormData from 'form-data';

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
    },
    setUserAvatar(avatar, id) {
        let data = new FormData();
        data.append('id', id);
        data.append('avatar', avatar, avatar.name);
        data.append ('method', 'setuseravater');
        return axios.post("http://proger25/api/index.php?", data, { 
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data;`,
            }
        });
    },
    getUserAvatar(id) {
        return axios({
            method: 'GET',
            url: "http://proger25/api/index.php?",
            params: {
                method: "getuseravatar",
                id
            }
        })
    }
}