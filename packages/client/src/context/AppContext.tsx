import { createContext, useEffect, useState } from "react";

interface IContext {
  text: string;
}

interface IProps {
  children: React.ReactNode;
}

const AppContext = createContext<IContext>({
  text: "Default Text",
});

const AppProvider = ({ children }: IProps) => {
  return (
    <AppContext.Provider value={{ text: "Default Text 2" }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
