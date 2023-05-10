import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewPic from "./pages/NewPic";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { state } = useContext(AppContext);
  // const user = state.user;

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={state.user ? <Home /> : <Login />} />
          <Route
            path="/register"
            element={state.user ? <Home /> : <Register />}
          />
          <Route path="/newpic" element={state.user ? <NewPic /> : <Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
