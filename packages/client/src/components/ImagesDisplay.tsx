import React from "react";
import IImage from "../interfaces/IImage";

interface IImagesDisplay {
  images: IImage[];
}

const ImagesDisplay = ({ images }: IImagesDisplay) => {
  return (
    <div>
      <h2>Images:</h2>
      <div className="bg-slate-200">
        {images.map((image, idx) => (
          <div>
            {image.url}
            <img src={``} alt="" />
            <p>
              heres the image{" "}
              {`http://localhost:3000/public/images/${image.url}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesDisplay;