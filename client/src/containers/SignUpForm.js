import React, { useState } from "react";
import API from "../utils/API";

function SignUpForm() {
  const [registerObj, setRegister] = useState({
    name: "",
    username: "",
    password: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setRegister({ ...registerObj, [name]: value });
  }

  function handleClick(e) {
    e.preventDafualt();
    if (registerObj.name && registerObj.username && registerObj.password) {
      API.registerUser(registerObj).catch((err) => console.log(err));
      console.log(registerObj);
    }
    setRegister({ name: "", username: "", password: "" });
  }
  return (
    <form className="w-75 mx-auto">
      <div className="form-group">
        <input
          type="Name"
          name="name"
          onChange={handleInput}
          className="form-control form-control-lg"
          id="InputName"
          aria-describedby="NameHelp"
          placeholder="Enter Name"
          value={registerObj.name}
        />
      </div>
      <div className="form-group">
        <input
          type="Username"
          name="username"
          onChange={handleInput}
          className="form-control form-control-lg"
          id="InputUsername"
          aria-describedby="UsernameHelp"
          placeholder="Enter username"
          value={registerObj.username}
        />
      </div>
      <div className="form-group">
        <input
          type="Password"
          name="password"
          onChange={handleInput}
          className="form-control form-control-lg"
          id="InputPassword"
          aria-describedby="PasswordeHelp"
          placeholder="Enter passwore"
          value={registerObj.password}
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          onClick={handleClick}
          className="btn btn-dark btn-block mx-auto w-75"
        >
          Register
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
