import axios from "axios";
export default {
  registerUser: function (userData) {
    return axios.get("/api/data/new", userData);
  },
};
