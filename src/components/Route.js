import React, { useContext } from "react";
import { RouterContext } from "./HashRouter";

const Route = ({ path, element }) => {

  const { location } = useContext(RouterContext);

  return location === path || path === "*" ? element : null;
};

export default Route;
