import React from 'react';
import * as FaIcons from "react-icons/fa";

import { Link } from "react-router-dom";


function Navbar() {
  return(
    
    <nav className="navbar">
      <Link to="/last" className="menu-bars">
    <FaIcons.FaBars/>
    
      </Link>
    </nav>
    
    
     
  )

}

export default Navbar