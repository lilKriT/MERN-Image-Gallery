interface IUser {
  _id: string;
  name: string;
  //   password: string; // TODO: check if really need pass and email here?
  //   email: string; // This too
  token: string;
}

export default IUser;
