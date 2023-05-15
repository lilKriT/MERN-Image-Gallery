import { useContext, useEffect, useState } from "react";
import IImage from "../interfaces/IImage";
import { AppContext } from "../context/AppContext";

interface IImageCard {
  image: IImage;
}

const ImageCard = ({ image }: IImageCard) => {
  const { state } = useContext(AppContext);

  useEffect(() => {
    const getAuthor = async () => {
      // const res = axios.get
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
      <p>
        {image.owner} and {state.user?._id}
      </p>
      <p>{new Date(image.createdAt).toDateString()}</p>
      {image.owner === state.user?._id && (
        <button className="btn btn--primary">Delete</button>
      )}
    </div>
  );
};

export default ImageCard;
