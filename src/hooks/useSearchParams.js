import { useContext } from "react";
import { RouterContext } from "../components/HashRouter";

function useSearchParams() {
  const { location } = useContext(RouterContext);

  const getSearchParams = () => {
    return new URLSearchParams(location.search);
  };

  const setSearchParams = (newParams) => {
    const searchParams = new URLSearchParams(location.search);

    Object.keys(newParams).forEach((key) => {
      if (newParams[key] === null) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, newParams[key]);
      }
    });

    const newLocation = `${location.pathname}?${searchParams.toString()}`;
    const state = location.state || null;
    window.history.pushState(state, "", `#${newLocation}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return [getSearchParams(), setSearchParams];
}

export { useSearchParams };
