import { useContext } from "react";
import { RouterContext } from "../components/HashRouter";

function useParams() {
  const { location, matchedRoute } = useContext(RouterContext);
  const { pathname } = location;

  const extractParams = (path, pathname) => {
    const paramNames = [];
    const regexPath = path
      .replace(/([.*+?^${}()|[\]\\])/g, "\\$1")
      .replace(/:(\w+)/g, (match, paramName) => {
        paramNames.push(paramName);
        return "([^/]+)";
      });

    const regex = new RegExp(`^${regexPath}$`);
    const match = pathname.match(regex);

    if (match) {
      const params = {};
      paramNames.forEach((name, index) => {
        params[name] = match[index + 1];
      });
      return params;
    }

    return null;
  };

  const path = matchedRoute?.props.path || pathname;
  const params = extractParams(path, pathname);

  return params;
}

export { useParams };
