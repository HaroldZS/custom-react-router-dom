import { useState, useEffect } from "react";

const getLocationProps = (location) => {
  const { href } = location;
  const hashIndex = href.indexOf("#");

  const mainPathname = hashIndex !== -1 ? href.slice(hashIndex + 1) : "";

  const otherHashIndex = mainPathname.indexOf("#");
  const hash = otherHashIndex !== -1 ? mainPathname.slice(otherHashIndex) : "";

  const searchIndex = mainPathname.indexOf("?");
  const search = searchIndex !== -1 ? mainPathname.slice(searchIndex) : "";

  const pathname = mainPathname.split("?")[0].split("#")[0];

  const state = window.history.state;

  return { hash, pathname, search, state };
};

function useLocation() {
  const [location, setLocation] = useState(getLocationProps(window.location));

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(getLocationProps(window.location));
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  return location;
}

export { useLocation };
