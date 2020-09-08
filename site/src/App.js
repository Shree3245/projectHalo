import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [authBool, setAuthBool] = useState(false);
  return <div className="App">{authBool ? <Login /> : <Login />}</div>;
}

export default App;
