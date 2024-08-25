import React, { useContext } from "react";
import { RouterContext } from "./HashRouter";

const matchPath = (path, pathname) => {
  const paramNames = [];
  const regexPath = path
    .replace(/\/:([^/]+)/g, (full, key) => {
      paramNames.push(key);
      return "/([^/]+)";
    })
    .replace(/\*/g, "(.*)");

  const match = pathname.match(new RegExp(`^${regexPath}$`));
  if (!match) return null;

  const params = match.slice(1).reduce((acc, value, index) => {
    acc[paramNames[index]] = value;
    return acc;
  }, {});

  return { params };
};

const Routes = ({ children }) => {
  const { location } = useContext(RouterContext);

  const matchedRoute = React.Children.toArray(children).find((child) => {
    const { path } = child.props;

    if (path === "*") return true;

    const match = matchPath(path, location.pathname);
    return match !== null;
  });

  const match = matchedRoute
    ? matchPath(matchedRoute.props.path, location.pathname)
    : null;

  return (
    <RouterContext.Provider value={{ location, matchedRoute }}>
      {matchedRoute
        ? React.cloneElement(matchedRoute.props.element, { ...match?.params })
        : null}
    </RouterContext.Provider>
  );
};

export { Routes };
