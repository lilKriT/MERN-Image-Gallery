import IImage from "../interfaces/IImage";
import ImageCard from "./ImageCard";

interface IImagesDisplay {
  images: IImage[];
}

const ImagesDisplay = ({ images }: IImagesDisplay) => {
  return (
    <section>
      <h2>Images:</h2>
      <div className="bg-slate-200 flex flex-wrap">
        {images.map((image, idx) => (
          <ImageCard image={image} />
        ))}
      </div>
    </section>
  );
};

export default ImagesDisplay;
