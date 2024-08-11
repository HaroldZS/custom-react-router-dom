import { useContext } from "react";
import { RouterContext } from "../components/HashRouter";

function useLocation() {
  const { location } = useContext(RouterContext);
  return location;
}

export default useLocation;