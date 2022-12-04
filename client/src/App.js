// import {useEffect, useSate} from "react";
// import Axios from "axios";
// import { useEffect } from "react";
// import userContext from "./context/userContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar.jsx";import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Technique from "./containers/Technique/Technique.jsx";
// import Search from "./containers/folder/Search/Search.jsx";
 import Saved from "./containers/Saved/Saved.jsx";
import SignIn from "./containers/SignIn/SignIn.jsx";
import dash from "./containers/myOnthere/dash";
// // import userContext from "../../context/userContext.js"
// // import React, { useContext, seState } from "react";
import SignUp from "./containers/SignUp/SignUp";
import EditComida from "./containers/EditComida/EditComida";
// import MakeMeal from "./containers/MakeMeal/MakeMeal";
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
  <Routes>
      {/* <Navbar /> */}
      {/* <Route exact path="/" component={SignIn}/> */}
      <Route exact path="/" element={<SignUp/>}/>
      <Route exact path="/signIn" element={<SignIn/>}/>
     <Route exact path="/technique" element={<Technique/>}/>
     <Route exact path="/dash" element={dash}/>
     <Route exact path="/last" element={<Saved/>}/>
     {/* <Route exact path="/make" component={MakeMeal}/> */}
     <Route exact path="/edit" element={<EditComida/>}/>
     <Route exact path="/saved:id" element={<Comida/>}/>
    <Route exact path="/all" element={<AllMeals/>}/>
     
  


      {/* <Route exact path="/edit" component={EditTechnique}/> */}
      </Routes>
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
