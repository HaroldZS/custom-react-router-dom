import React from "react";

function Link({ to, children }) {
  
  const handleClick = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', `#${to}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return (
    <span onClick={handleClick} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
}

export { Link };