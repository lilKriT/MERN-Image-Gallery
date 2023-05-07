// @desc Get Image
// @route GET api/v1/image
// @access Public
const getImage = () => {
  console.log("Getting image");
};

// @desc Add Image
// @route POST api/v1/image
// @access Private
const addImage = () => {
  console.log("Adding image");
};

// @desc Remove Image
// @route DELETE api/v1/image
// @access Private
const removeImage = () => {
  console.log("Removing image");
};

export { addImage, removeImage };
