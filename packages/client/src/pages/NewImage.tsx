import axios from "axios";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3000/api/v1";

const NewImage = () => {
  const [previewImage, setPreviewImage] = useState<string>("");
  const [file, setFile] = useState<File | null>();
  const [alternate, setAlternate] = useState("");

  const { state, dispatch } = useContext(AppContext);

  const navigate = useNavigate();

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

    if (!state.user) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("user", state.user._id);
      formData.append("alternate", alternate);

      const headers = {
        Authorization: `Bearer ${state.user?.token}`,
        "Content-Type": "multipart/form-data",
      };

      const res = await axios.post(`${url}/images/`, formData, {
        headers,
      });

      navigate("/");
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
          </label>
          <label>
            Picture description:
            <input
              className="border border-black/30 w-full p-2 rounded"
              placeholder="Verbal description of your picture"
              value={alternate}
              onChange={(e) => setAlternate(e.target.value)}
            />
          </label>
          <button className="btn btn--primary">Post picture</button>
        </form>
      </div>
    </div>
  );
};

export default NewImage;
