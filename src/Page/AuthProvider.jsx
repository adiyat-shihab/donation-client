import { createContext } from "react";
export const authContext = createContext(null);
export const AuthProvider = ({ children }) => {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};
