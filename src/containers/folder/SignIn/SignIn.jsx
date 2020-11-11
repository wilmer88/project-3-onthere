// import React, { Component } from 'react';
// import { link } from "react-router-dom";
import React, { useState } from "react";
// function login

//form signin
const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitedForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Please Login</h1>
              <form onSubmit ={submitedForm}>
                <div className="form-row" />
                <div class="form-group col-md-6" />

                <label for="inputEmail4">Full Name</label>
                <input type="email" className="form-control" id="inputEmail4" />

                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  value={email}
                  name="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />

                <label for="inputEmail4">password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputpassword"
                  value={password}
                  name="password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
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
