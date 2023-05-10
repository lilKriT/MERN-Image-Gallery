import React, { useState } from "react";

const NewPic = () => {
  const [image, setImage] = useState<string>("");

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onImageRemove = () => {
    // console.log("Removing image");
    setImage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Sending a pic");
  };

  return (
    <div className="flex justify-center">
      <div className="container">
        Add pics here
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 shadow-lg shadow-black/30 p-8 rounded-3xl mt-16"
        >
          {image && (
            <>
              <img
                src={image}
                alt="Preview Image"
                className="h-40 w-full object-contain"
              />
              <button
                type="button"
                className="btn btn--primary"
                onClick={onImageRemove}
              >
                Remove image
              </button>
            </>
          )}

          <label>
            Insert pic:
            <input
              type="file"
              name="pic"
              id="pic"
              onChange={(e) => onImageChange(e)}
            />
            <button className="btn btn--primary">Post picture</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default NewPic;
