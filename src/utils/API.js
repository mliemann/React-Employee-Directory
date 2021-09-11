import axios from 'axios';

const API = {
    fetchUsers: function() {
        return axios
          .get("https://randomuser.me/api/?seed=foobar&results=200")
      }
};

export default API;