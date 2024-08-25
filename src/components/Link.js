import React from "react";

function Link({ to, children, state = null }) {

  const handleClick = (e) => {
    e.preventDefault();
    window.history.pushState(state, "", `#${to}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return (
    <span onClick={handleClick} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
}

export { Link };
