import { useContext } from "react";
import { RouterContext } from "../components/HashRouter";

function useNavigate() {
  const { setLocation } = useContext(RouterContext);

  function navigate(to) {
    window.history.pushState(null, "", `#${to}`);
    setLocation(to);
  }

  return navigate;
}

export default useNavigate;
