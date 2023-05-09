import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="flex justify-center">
      <div className="container">
        Home is here.
        <p>{user ? `Current user: ${user.name}` : "No user"}</p>
      </div>
    </div>
  );
};

export default Home;
