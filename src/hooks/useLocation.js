import { useState, useEffect } from "react";

const getLocationProps = (location) => {
  const { href } = location;
  const hashIndex = href.indexOf("#");

  const pathname = hashIndex !== -1 ? href.slice(hashIndex + 1) : "";
  const finalHashIndex = pathname.indexOf("#");
  const hash = finalHashIndex !== -1 ? pathname.slice(finalHashIndex) : "";

  return { hash, pathname };
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
