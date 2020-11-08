import {useEffect, useSate} from "react";
import Home from "./containers/folder/Home/Home.jsx";
import Search from "./containers/folder/Search/Search.jsx";
import Saved from "./containers/folder/Saved/Saved.jsx"
import SignIn from "./containers/folder/SignIn/SignIn"
function App() {
  return (
    <div className="App">
      <Home />
      <Search />
      <Saved />
      <SignIn />

      
    </div>
  );
}

export default App;
