import axios from "axios";
import React, { useState } from "react";

const url = "http://localhost:3000/api/v1";

const NewPic = () => {
  const [previewImage, setPreviewImage] = useState<string>("");
  const [file, setFile] = useState<File | null>();

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onImageRemove = () => {
    setPreviewImage("");
    setFile(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("pic", file);
      formData.append("name", "Some name");
      const res = await axios.post(`${url}/images/`, formData);
    } catch (error) {}
  };

  return (
    <div className="flex justify-center">
      <div className="container">
        Add pics here
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 shadow-lg shadow-black/30 p-8 rounded-3xl mt-16"
        >
          {previewImage && (
            <>
              <img
                src={previewImage}
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
