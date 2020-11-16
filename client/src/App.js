// import {useEffect, useSate} from "react";
// import Axios from "axios";
// import { useEffect } from "react";
// import userContext from "./context/userContext";
 import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Technique from "./containers/Technique/Technique.jsx";
// import Search from "./containers/folder/Search/Search.jsx";
 import Saved from "./containers/Saved/Saved.jsx";
import SignIn from "./containers/SignIn/SignIn.jsx";
import dash from "./containers/myOnthere/dash";
// // import userContext from "../../context/userContext.js"
// // import React, { useContext, seState } from "react";
import SignUpForm from "./containers/SignUpForm";
import EditComida from "./containers/EditComida/EditComida";
import MakeMeal from "./containers/MakeMeal/MakeMeal";
import Comida from "./containers/Comida/Comida";
import AllMeals from "./containers/AllMeals/AllMeals";
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

  
  
  
  
  
  return (
  <Router>
  <Switch>
      {/* <Navbar /> */}
      <Route exact path="/" component={SignIn}/>
      <Route exact path="/SignUpForm" component={SignUpForm}/>
      <Route exact path="/signIn" component={SignIn}/>
     <Route exact path="/technique" component={Technique}/>
     <Route exact path="/dash" component={dash}/>
     {/* <Route exact path="/last" component={Saved}/> */}
     <Route exact path="/saved/make" component={MakeMeal}/>
     <Route exact path="/saved/:id/edit" component={EditComida}/>
     <Route exact path="/saved/saved:id" component={Comida}/>
    <Route exact path="/saved" component={AllMeals}/>
     
  


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
