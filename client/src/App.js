// import {useEffect, useSate} from "react";
import Axios from "axios";
import { useEffect } from "react";
// import userContext from "./context/userContext";
 import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Technique from "./containers/Technique/Technique.jsx";
// import Search from "./containers/folder/Search/Search.jsx";
// import Saved from "./containers/folder/Saved/Saved.jsx";
import SignIn from "./containers/SignIn/SignIn.jsx";
// import { Saved } from "../../models/index.js";
// // import userContext from "../../context/userContext.js"
// // import React, { useContext, seState } from "react";
import SignUpForm from "./containers/SignUpForm";
import Vidcard from "./containers/VidCard/VidCard"
function App() {
//  useEffect(() => {
//       console.log("make an API call");

//       Axios.get("/api/config")
//         .then((gettingback) => {
//           console.log(gettingback);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, []),

  // const [token, setToken] = useState("");
  // const [email, setemail] = useState("");
  return (

   <Router>
  <Switch>
      {/* <Navbar /> */}
      
      <Route exact path="/SignUpForm" component={SignUpForm}/>
      <Route exact path="/signIn" component={SignIn}/>
<Route exact path="/technique" component={Technique}/>
    
      {/* <Route exact path="/saved" component={Saved}/> */}
      {/* <Route exact path="/edit" component={EditTechnique}/> */}
      </Switch>
   </Router>
  

    //   <router>
    //      {/* <Switch> */}
    //     <>
    //  {/* <userContext.Provider */}
    // {/* //  value={{ token, email, setToken, setemail }} */}
    //  {/* > */}
    //     <Navbar />
    //     <Technique />
    //     {/* <SignIn /> */}
    //   {/* </userContext.Provider> */}
    //   </>
    //   {/* </Switch> */}
    //   </router>
  );
}

export default App;
