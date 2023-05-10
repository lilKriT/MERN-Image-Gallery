import { createContext, useEffect, useReducer, useState } from "react";
import UserReducer, { UserAction, UserState } from "./UserReducer";

// interface IContext {
//   // text: string;
//   user: IUser | null;
//   setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
//   isFetching: boolean;
//   setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
//   error: string;
//   setError: React.Dispatch<React.SetStateAction<string>>;
// }

interface IContext {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}

interface IProps {
  children: React.ReactNode;
}

// const AppContext = createContext<IContext>({
//   // text: "Default Text",
//   user: null,
//   setUser: () => {},
//   isFetching: false,
//   setIsFetching: () => {},
//   error: "",
//   setError: () => {},
// });

const AppContext = createContext<IContext>({
  state: { user: null, isFetching: false, error: "" },
  dispatch: () => {},
});

const AppProvider = ({ children }: IProps) => {
  // const [user, setUser] = useState<IUser | null>(
  //   JSON.parse(localStorage.getItem("user") || "{}")
  // );
  // const [isFetching, setIsFetching] = useState(false);
  // const [error, setError] = useState("");

  const [state, dispatch] = useReducer(UserReducer, {
    user: null,
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
