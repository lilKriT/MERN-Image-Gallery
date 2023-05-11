import { createContext, useEffect, useReducer, useState } from "react";
import UserReducer, { UserAction, UserState } from "./UserReducer";

interface IContext {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}

interface IProps {
  children: React.ReactNode;
}

const AppContext = createContext<IContext>({
  state: { user: null, isFetching: false, error: "" },
  dispatch: () => {},
});

const AppProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(UserReducer, {
    user: JSON.parse(localStorage.getItem("user") || "{}"),
    isFetching: false,
    error: "",
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
