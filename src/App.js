// import {useEffect, useSate} from "react";

// import userContext from "./context/userContext";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Technique from "./containers/folder/Technique/Technique.jsx";
import Search from "./containers/folder/Search/Search.jsx";
import Saved from "./containers/folder/Saved/Saved.jsx";
// import SignIn from "./containers/folder/SignIn/SignIn";
// import userContext from "../../context/userContext.js"
// import React, { useContext, seState } from "react";



function App() {
  // const [token, setToken] = useState("");
  // const [email, setemail] = useState("");
  return (
    <router>
       {/* <Switch> */}
      <>
   {/* <userContext.Provider */}
  {/* //  value={{ token, email, setToken, setemail }} */}
   {/* > */}
      <Navbar />
      <Technique />
      {/* <SignIn /> */}
    {/* </userContext.Provider> */}
    </>
    {/* </Switch> */}
    </router>
  );
}

export default App;
