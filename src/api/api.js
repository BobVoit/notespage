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
    }
}