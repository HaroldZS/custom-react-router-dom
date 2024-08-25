import React from "react";
import { Link } from "../components/Link";
import { useLocation } from "../hooks/useLocation";
import { useNavigate } from "../hooks/useNavigate";

function Home() {
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <Link to="/about">
        <div style={{ color: "red" }}>To About with Link component</div>
      </Link>
      <button onClick={() => navigate("/about", { key: "value" })}>
        To about with useNavigate & state
      </button>
      <Link to="/about?query=new">
        <div style={{ color: "red" }}>To About with Link && search</div>
      </Link>
    </>
  );
}

export { Home };
