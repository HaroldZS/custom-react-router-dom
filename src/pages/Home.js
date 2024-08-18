import React from "react";
import { Link } from "../components/Link";
import { useLocation } from "../hooks/useLocation";

function Home() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div>Home</div>
      <Link to="/about">To About</Link>
    </>
  );
}

export { Home };
