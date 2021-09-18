import React, { useState, useEffect } from "react";
import fire from "./auth/fire.js";
import Dashboard from "./pages/dashboard";
import "./App.css";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
};

export default App;