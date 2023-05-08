import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-center">
      <div className="container flex justify-between items-center mt-4">
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
