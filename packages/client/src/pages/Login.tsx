import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const url = "http://localhost:3000/api/v1";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser, isFetching, setIsFetching } = useContext(AppContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(`Login: ${login}, password: ${password}`);

    try {
      // Log In Start
      setUser(null);
      setIsFetching(true);

      const res = await axios.post(`${url}/users/login`, {
        email,
        password,
      });

      console.log(res.data);
      // Log In Success
      setUser(res.data);
      setIsFetching(false);
    } catch (err) {
      // Log In Fail
      setUser(null);
      setIsFetching(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="container">
        <form
          className="flex flex-col gap-4 shadow-lg shadow-black/30 p-8 rounded-3xl mt-16"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h2>Insert your email and password</h2>
          <h3>{user ? user.name : "no user"}</h3>
          <label className="flex flex-col gap-2">
            Email:
            <input
              type="text"
              className="inputField"
              placeholder="Your name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
