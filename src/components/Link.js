import React, { useContext } from "react";
import { RouterContext } from "./HashRouter";

function Link({ to, children }) {
  const { setLocation } = useContext(RouterContext);

  const handleClick = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', `#${to}`);
    setLocation(to);
  };

  return (
    <span onClick={handleClick} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
}

export { Link };