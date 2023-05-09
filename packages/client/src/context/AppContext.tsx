import { createContext, useEffect, useState } from "react";
import IUser from "../interfaces/IUser";

interface IContext {
  // text: string;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

interface IProps {
  children: React.ReactNode;
}

const AppContext = createContext<IContext>({
  // text: "Default Text",
  user: null,
  setUser: () => {},
});

const AppProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
