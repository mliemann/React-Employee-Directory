import axios from 'axios';

const API = {
    fetchUsers: function() {
        return axios
          .get("https://randomuser.me/api/?seed=emp")
          .then(res => {
            const users = res.data;
            return users.map(user => {
              return {
                firstname: user.name.first,
                lastname: user.name.last,
                email: user.email,
                birthday: user.dob.date,
                cell: user.cell,
                id: user.id.value,
                sex: user.gender
              };
            });
          });
      }
};

export default API;