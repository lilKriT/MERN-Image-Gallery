import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { UserActionType } from "../context/UserReducer";

const Header = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleLogout = () => {
    dispatch({ type: UserActionType.logout, payload: null });
  };

  return (
    <header className="flex justify-center border-b-2 border-blue-500/50">
      <div className="container flex justify-between items-center mt-4 mb-2">
        <Link to="/">LOGO</Link>
        <nav className="flex">
          <menu className="flex gap-4">
            <li>
              <Link to="/">View</Link>
            </li>
            {state.user && (
              <li>
                <Link to="/newpic">Add</Link>
              </li>
            )}
          </menu>
        </nav>
        <nav className="flex">
          <menu className="flex gap-4">
            {state.user ? (
              <li>
                <button className="btn btn--primary" onClick={handleLogout}>
                  Log out
                </button>
              </li>
            ) : (
              <>
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
              </>
            )}
          </menu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
