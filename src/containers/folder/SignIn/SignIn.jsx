// import React, { Component } from 'react';
import {link} from "react-router-dom"



const SignIn = () => {
  return (
    <div>
               <>
               
               <div className="container">
                 <div className="row">
                   <div className="col-sm-12">
                   <h1>Please Login</h1>
                   <form>
  <div className="form-row"/>
    <div class="form-group col-md-6"/>
      <label for="inputEmail4">Full Name</label>
      <input type="email" className="form-control" id="inputEmail4"/>
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4"/>
      <label for="inputEmail4">password</label>
      <input type="email" className="form-control" id="inputEmail4"/>
      
  
 
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
                   </div>
                 </div>
               </div>
       
           </>
    </div>
  );
};

export default SignIn;