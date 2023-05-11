import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { UserActionType } from "../context/UserReducer";

const url = "http://localhost:3000/api/v1";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { setUser, setIsFetching, setError } = useContext(AppContext);
  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Register start
      // setUser(null);
      // setIsFetching(true);
      // setError("");
      dispatch({
        type: UserActionType.loginStart,
        payload: null,
      });

      const res = await axios.post(`${url}/users/`, {
        name,
        email,
        password,
      });

      // console.log(res.data);
      // Register success
      // setUser(res.data);
      // setIsFetching(false);
      // setError("");
      dispatch({ type: UserActionType.loginSuccess, payload: res.data });
    } catch (err) {
      // Register fail
      // setUser(null);
      // setIsFetching(false);
      // setError("Can't register");
      dispatch({ type: UserActionType.loginFail, payload: null });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="container">
        <form
          className="flex flex-col gap-4 shadow-lg shadow-black/30 p-8 rounded-3xl mt-16"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h2>Register form</h2>
          {/* Name */}
          <label className="flex flex-col gap-2">
            Username:
            <input
              type="text"
              className="inputField"
              placeholder="Your name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          {/* Email */}
          <label className="flex flex-col gap-2">
            Email:
            <input
              type="text"
              className="inputField"
              placeholder="Your name"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* Password */}
          <label className="flex flex-col gap-2">
            Password:
            <input
              type="password"
              className="inputField"
              placeholder="Your password"
              autoComplete="new-password"
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

export default Register;
