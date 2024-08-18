import { createContext } from "react";
import { useLocation } from "../hooks/useLocation";

const RouterContext = createContext();

const HashRouter = ({ children }) => {
  const location = useLocation();

  return (
    <RouterContext.Provider value={{ location }}>
      {children}
    </RouterContext.Provider>
  );
};

export { RouterContext, HashRouter };
