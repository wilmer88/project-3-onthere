import React from "react";

const UserContext = React.createContext({
  token: "",
  email: "",
  setToken: () => {},
  setemail: () => {},
});
 
export default UserContext