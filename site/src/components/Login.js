import React, { useState } from "react";

export default function Login(props) {
  const [user, setUser] = useState("");
  const [passw, setPassw] = useState("");

  const updatePass = (e) => {
    setPassw(e.target.value);
  };

  const updateUser = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="login-div">
      <div className="username-div">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={user}
          onChange={updateUser}
          className="login-input"
        ></input>
      </div>
      <br></br>
      <div className="passw-div">
        <label htmlFor="passw">Password</label>
        <input
          id="passw"
          value={passw}
          onChange={updatePass}
          type="password"
          className="login-input"
        ></input>
      </div>
      <button onClick={() => props.propTest(user)} className="login-button">
        Submit
      </button>
    </div>
  );
}
