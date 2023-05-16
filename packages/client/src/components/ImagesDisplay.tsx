import IImage from "../interfaces/IImage";
import ImageCard from "./ImageCard";

interface IImagesDisplay {
  images: IImage[];
  removeImage: (image: IImage) => void;
}

const ImagesDisplay = ({ images, removeImage }: IImagesDisplay) => {
  return (
    <section>
      <h2>Images:</h2>
      <div className="bg-slate-200 flex flex-wrap">
        {images.map((image, idx) => (
          <ImageCard image={image} removeImage={removeImage} />
        ))}
      </div>
    </section>
  );
};

export default ImagesDisplay;
