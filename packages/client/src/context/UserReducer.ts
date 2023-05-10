import IUser from "../interfaces/IUser";

enum UserActionType {
  login = "login",
  logout = "logout",
}

interface UserAction {
  type: UserActionType;
  payload: string;
}

interface TempState {
  user: IUser | null;
  isFetching: boolean;
  error: string;
}

const UserReducer = (state: TempState, action: UserAction) => {
  const { type, payload } = action;
  switch (type) {
    case "login":
      console.log("reducer login");
      return state;
    case "logout":
      console.log("reducer logout");
      return state;
    default:
      console.log("reducer default");
      throw new Error(`Unknown action: ${type}`);
  }
};

export default UserReducer;
