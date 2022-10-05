import { createContext } from "react";
const AppContext = createContext();
const AppProvider = function ({ children }) {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};
export { AppProvider, AppContext };
