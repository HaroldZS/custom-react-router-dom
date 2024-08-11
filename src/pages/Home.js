import React from "react";
import { Link } from "../components/Link";

function Home() {
  return (
    <>
      <div>Home</div>
      <Link to="/about">To About</Link>
    </>
  );
}

export { Home };
