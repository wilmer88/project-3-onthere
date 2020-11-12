// import React, { Component } from 'react';
// import { link } from "react-router-dom";
// import userEvent from "@testing-library/user-event";
// import React, { useContext, useState } from "react";
// import UserContext from "./context/userContext.js";
// function login
// const morgan = require("morgan")
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
              <form onSubmit ="">
              {/* <form onSubmit ={submitedForm}> */}
                <div className="form-row" />
                <div class="form-group col-md-6" />

                <label for="inputEmail4">Full Name</label>
                <input type="email" className="form-control" id="inputEmail4" />

                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // value={email}
                  name="email"
                  // onChange={(e) => {
                  //   setemail(e.target.value);
                  // }}
                />

                <label for="inputEmail4">password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputpassword"
                  // value={password}
                  name="password"
                  // onChange={(e) => {
                  //   setpassword(e.target.value);
                  // }}
                />

                <button type="submit" class="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SignIn;
