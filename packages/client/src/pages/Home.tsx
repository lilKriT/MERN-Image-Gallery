import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import ImagesDisplay from "../components/ImagesDisplay";

const url = "http://localhost:3000/api/v1";

const Home = () => {
  const { state } = useContext(AppContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get(`${url}/images`);
      // console.log(res.data);
      setImages(res.data);
    };
    fetchImages();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="container">
        Home is here.
        <p>{state.user ? `Current user: ${state.user.name}` : "No user"}</p>
        <ImagesDisplay images={images} />
      </div>
    </div>
  );
};

export default Home;
