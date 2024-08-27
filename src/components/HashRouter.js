import { createContext, useEffect } from "react";
import { useLocation } from "../hooks/useLocation";

const RouterContext = createContext();

const HashRouter = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#/");
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }, []);

  return (
    <RouterContext.Provider value={{ location }}>
      {children}
    </RouterContext.Provider>
  );
};

export { RouterContext, HashRouter };
