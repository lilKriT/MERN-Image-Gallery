import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import ImagesDisplay from "../components/ImagesDisplay";
import IImage from "../interfaces/IImage";

const url = "http://localhost:3000/api/v1";

const Home = () => {
  const { state } = useContext(AppContext);
  const [images, setImages] = useState<IImage[]>([]);

  const removeImage = (image: IImage) => {
    const newImages = images.filter((img) => img !== image);
    setImages(newImages);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get(`${url}/images`);
      setImages(res.data);
    };
    fetchImages();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="container">
        Home is here.
        <p>{state.user ? `Current user: ${state.user.name}` : "No user"}</p>
        <ImagesDisplay images={images} removeImage={removeImage} />
      </div>
    </div>
  );
};

export default Home;
