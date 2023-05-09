import React from "react";

const NewPic = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sending a pic");
  };

  return (
    <div className="flex justify-center">
      <div className="container">
        Add pics here
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 shadow-lg shadow-black/30 p-8 rounded-3xl mt-16"
        >
          <label>
            Insert pic:
            <input type="file" name="pic" id="pic" />
            <button className="btn btn--primary">Post picture</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default NewPic;
