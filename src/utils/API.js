import axios from 'axios';

const URL = "https://randomuser.me/api/?seed=emp";

const API = {
    search: function(userdata) {
        return axios.get(URL + userdata);
    }
};

export default API;