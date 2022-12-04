// import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import userEvent from "@testing-library/user-event";
// import React, { useContext, useState } from "react";
// import UserContext from "./context/userContext.js";
// function login
// const morgan = require("morgan")
// import Technique from "./containers/Technique/Technique";

//form signin
const SignIn = () => {
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");

  // const submitedForm = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     token: "boxing123",
  //     email: "bill@gmail",
  //   };
  //   user.seteamil(data.email),
  //   user.setToken(data.token)
  // };

  return (
    <div>
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Please Login</h1>
              {/* <form onSubmit =""> */}
              {/* <form onSubmit ={submitedForm}> */}
                <div className="form-row" />
                <div className="form-group col-md-6" />

                <label >Full Name</label>
                <input type="email" className="form-control" id="inputEmail4" />

                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  // id="inputEmail4"
                  // value={email}
                  name="email"
                  // onChange={(e) => {
                  //   setemail(e.target.value);
                  // }}
                />

                <label >password</label>
                <input
                  type="password"
                  className="form-control"
                  // id="inputpassword"
                  // value={password}
                  name="password"
                  // onChange={(e) => {
                  //   setpassword(e.target.value);
                  // }}
                />
<Link to="/technique">
<button
          type="button"
         
          className="btn btn-dark btn-block mx-auto w-75"
        >
          Register
        </button>

</Link>

              {/* </form> */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SignIn;
