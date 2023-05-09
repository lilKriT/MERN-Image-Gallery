import React, { useState } from "react";
// import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Login: ${login}, password: ${password}`);
  };

  return (
    <div className="flex justify-center">
      <div className="container">
        <form
          className="flex flex-col gap-4 shadow-lg shadow-black/30 p-8 rounded-3xl"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h2>Insert your login and password</h2>
          <label className="flex flex-col gap-2">
            Login:
            <input
              type="text"
              className="inputField"
              placeholder="Your name"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2">
            Password:
            <input
              type="password"
              className="inputField"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="btn btn--primary">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
