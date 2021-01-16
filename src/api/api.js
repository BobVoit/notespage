import * as axios from "axios";
import FormData from 'form-data';

const QUERY = "proger25";

export const userAPI = {
    signUp(login, password, nickname) {
        return axios({
            method: 'POST',
            url: `http://${QUERY}/api/index.php?`,
            params: {
                method: 'registration',
                login, password, nickname
            }
        })
    },
    login(login, password) {
        return axios({
            method: 'POST',
            url: `http://${QUERY}/api/index.php?`,
            params: {
                method: 'login',
                login, password
            }
        })
    },
    logout(token) {
        return axios({
            method: 'POST',
            url: `http://${QUERY}/api/index.php?`,
            params: {
                method: 'logout',
                token
            }
        })
    },
    getUserByToken(token) {
        return axios({
            method: 'GET',
            url: `http://${QUERY}/api/index.php?`,
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
        // data.append('avatar', avatar);
        data.append ('method', 'setuseravater');
        return axios.post(`http://${QUERY}/api/index.php?`, data);
    },
    getUserAvatar(id) {
        return axios({
            method: 'GET',
            url: `http://${QUERY}/api/index.php?`,
            params: {
                method: "getuseravatar",
                id
            }
        })
    },
    addNote(id, title, message) {
        return axios({
            method: 'POST',
            url: `http://${QUERY}/api/index.php?`,
            params: {
                method: "addnote",
                id, title, message
            }
        })
    },
    getAllNotes(id) {
        return axios({
            method: 'GET',
            url: `http://${QUERY}/api/index.php?`,
            params: {
                method: "getallnotes",
                id
            }
        })
    },
    deleteNote(note_id) {
        return axios({
            method: 'GET',
            url: `http://${QUERY}/api/index.php?`,
            params: {
                method: "deletenote",
                note_id
            }
        })
    }
}