import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="container">
        <form className="flex flex-col gap-4 shadow-lg shadow-black/30 p-8 rounded-3xl">
          <h2>Insert your login and password</h2>
          <label className="flex flex-col">
            Login:
            <input type="text" className="border-b border-black" />
          </label>
          <label className="flex flex-col">
            Password:
            <input type="password" className="border-b border-black" />
          </label>
          <button className="btn btn--primary">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
