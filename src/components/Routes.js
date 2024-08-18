import { useContext } from "react";
import { RouterContext } from "./HashRouter";

const Routes = ({ children }) => {
  const { location } = useContext(RouterContext);

  const matchedRoute = children.find((child) => {
    if (child.props.path === "*") return true;

    if (child.props.path === location.pathname) return true;

    return false;
  });

  return matchedRoute ? matchedRoute.props.element : null;
};

export { Routes };
