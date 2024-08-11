import { createContext, useEffect, useState } from "react";

const HashRouter = ({ children }) => {
  const [location, setLocation] = useState(
    window.location.hash.replace("#", "") || "/"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setLocation(window.location.hash.replace("#", "") || "/");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <RouterContext.Provider value={{ location, setLocation }}>
      {children}
    </RouterContext.Provider>
  );
};

export const RouterContext = createContext();
export default HashRouter;
