import { useState, useEffect } from "react";

const getLocationProps = (location) => {
  const initialPathname = location.href;
  const index = initialPathname.indexOf("#");

  const pathname = initialPathname.substring(index + 1);

  const hashIndex = pathname.indexOf("#");
  const hash = hashIndex != -1 ? pathname.substring(hashIndex) : "";

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
