import { useContext, useEffect, useState } from "react";
import IImage from "../interfaces/IImage";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const url = "http://localhost:3000/api/v1";

interface IImageCard {
  image: IImage;
}

const ImageCard = ({ image }: IImageCard) => {
  const { state } = useContext(AppContext);
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    const getAuthor = async () => {
      const res = await axios.get(`${url}/users/name/${image.owner}`);
      setAuthorName(res.data.name);
    };
    getAuthor();
  }, []);

  return (
    <div className="w-1/3">
      <img
        src={`http://localhost:3000/images/${image.url}`}
        alt=""
        className="w-full"
      />
      <h3>{image.alt}</h3>
      {}
      <p>{authorName}</p>
      <p>{new Date(image.createdAt).toDateString()}</p>
      {image.owner === state.user?._id && (
        <button className="btn btn--primary">Delete</button>
      )}
    </div>
  );
};

export default ImageCard;
