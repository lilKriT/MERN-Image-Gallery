import IUser from "../interfaces/IUser";

enum UserActionType {
  loginStart = "loginStart",
  loginSuccess = "loginSuccess",
  loginFail = "loginFail",
  logout = "logout",
}

interface UserAction {
  type: UserActionType;
  payload: IUser | null;
}

interface UserState {
  user: IUser | null;
  isFetching: boolean;
  error: string;
}

const UserReducer = (state: UserState, action: UserAction): UserState => {
  const { type, payload } = action;
  switch (type) {
    case "loginStart":
      console.log("reducer login start");
      return {
        user: null,
        isFetching: true,
        error: "",
      };
    case "loginSuccess":
      console.log("reducer login success");
      return {
        user: payload,
        isFetching: false,
        error: "",
      };

    case "loginFail":
      console.log("reducer login fail");
      return state;
    case "logout":
      console.log("reducer logout");
      return state;
    default:
      console.log("reducer default");
      throw new Error(`Unknown action: ${type}`);
  }
};

export {
  UserReducer as default,
  UserActionType,
  type UserAction,
  type UserState,
};
