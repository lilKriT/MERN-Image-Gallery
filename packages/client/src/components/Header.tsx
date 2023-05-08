import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-center border-b-2 border-blue-500/50">
      <div className="container flex justify-between items-center mt-4 mb-2">
        <Link to="/">LOGO</Link>
        <nav>
          <menu className="flex gap-4">
            <li>
              <Link to="/login" className="btn btn--primary">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="btn btn--secondary">
                Register
              </Link>
            </li>
          </menu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
