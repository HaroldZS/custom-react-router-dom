import { useContext } from "react";
import { RouterContext } from "./HashRouter";

const Routes = ({ children }) => {
  const { location } = useContext(RouterContext);

  const matchedRoute = children.find(
    (child) =>
      child.props.path === location.pathname || child.props.path === "*"
  );

  return matchedRoute ? matchedRoute.props.element : null;
};

export { Routes };
