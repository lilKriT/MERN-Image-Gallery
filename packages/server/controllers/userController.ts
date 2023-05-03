// @desc Register user
// @route POST api/v1/users
// @access Public
const registerUser = () => {
  console.log("Registering user");
};

// @desc Log in user
// @route POST api/v1/users/login
// @access Public
const loginUser = () => {
  console.log("User Logged in");
};

// @desc Get user info
// @route POST api/v1/users/me
// @access Private
const getMe = () => {
  console.log("My info");
};

export { registerUser, loginUser, getMe };
