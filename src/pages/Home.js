import React from "react";
import { Link } from "../components/Link";
import { useLocation } from "../hooks/useLocation";
import { useNavigate } from "../hooks/useNavigate";

function Home() {
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "8px",
      }}
    >
      <h1>Home</h1>
      <Link to="/about">
        <div style={{ color: "red" }}>To About with Link component</div>
      </Link>
      <Link to="/about" state={{ link: "link value" }}>
        <div style={{ color: "purple" }}>
          To About with Link component & state
        </div>
      </Link>
      <Link to="/about?query=new">
        <div style={{ color: "green" }}>To About with Link & search</div>
      </Link>
      <Link to="/about?query=new" state={{ link: "link value" }}>
        <div style={{ color: "blue" }}>To About with Link, search & state</div>
      </Link>
      <button onClick={() => navigate("/about")}>
        To about with useNavigate
      </button>
      <button onClick={() => navigate("/about?query=new")}>
        To about with useNavigate & search
      </button>
      <button
        onClick={() => navigate("/about", { navigate: "navigate value" })}
      >
        To about with useNavigate & state
      </button>
      <button
        onClick={() =>
          navigate("/about?query=new", { navigate: "navigate value" })
        }
      >
        To about with useNavigate, search & state
      </button>
      <button
        style={{ backgroundColor: "orange", color: "white" }}
        onClick={() => navigate("/user/73")}
      >
        To user #73 profile
      </button>
      <button
        style={{ backgroundColor: "orange", color: "white" }}
        onClick={() => navigate("/user/73?query=new", { user: "user data" })}
      >
        To user #73 profile with search & state
      </button>
    </div>
  );
}

export { Home };
