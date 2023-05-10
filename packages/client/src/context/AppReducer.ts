enum TempActionType {
  login = "login",
  logout = "logout",
}

interface TempAction {
  type: TempActionType;
  payload: string;
}

interface TempState {
  text: "bla bla";
}

const AppReducer = (state: TempState, action: TempAction) => {
  const { type, payload } = action;
  switch (type) {
    case "login":
      console.log("reducer login");
      return "abc";
    case "logout":
      console.log("reducer logout");
      return "cda";
    default:
      console.log("reducer default");
      throw new Error(`Unknown action: ${type}`);
  }
};
