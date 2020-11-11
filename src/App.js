// import {useEffect, useSate} from "react";


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Technique from "./containers/folder/Technique/Technique.jsx";
import Search from "./containers/folder/Search/Search.jsx";
import Saved from "./containers/folder/Saved/Saved.jsx";
import SignIn from "./containers/folder/SignIn/SignIn";



function App() {
  return (
    <router>
   <>
     
      <Navbar />
      <SignIn />
      {/* <Switch>
      
      </Switch>
      */}
     
    </>
      
    </router>
  );
}

export default App;
