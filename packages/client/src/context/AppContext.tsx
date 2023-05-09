import { createContext, useEffect, useState } from "react";
import IUser from "../interfaces/IUser";

interface IContext {
  // text: string;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  isFetching: boolean;
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
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
});

const AppProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser, isFetching, setIsFetching }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
