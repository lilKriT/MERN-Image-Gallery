import { createContext, useEffect, useState } from "react";
import IUser from "../interfaces/IUser";

interface IContext {
  // text: string;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  isFetching: boolean;
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

interface IProps {
  children: React.ReactNode;
}

const AppContext = createContext<IContext>({
  // text: "Default Text",
  user: null,
  setUser: () => {},
  isFetching: false,
  setIsFetching: () => {},
  error: "",
  setError: () => {},
});

const AppProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser | null>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AppContext.Provider
      value={{ user, setUser, isFetching, setIsFetching, error, setError }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
