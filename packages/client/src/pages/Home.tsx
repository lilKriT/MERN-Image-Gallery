import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="flex justify-center">
      <div className="container">
        Home is here.
        <p>{state.user ? `Current user: ${state.user.name}` : "No user"}</p>
      </div>
    </div>
  );
};

export default Home;
