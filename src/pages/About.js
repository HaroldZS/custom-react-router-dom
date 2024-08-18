import React from "react";
import { useNavigate } from "../hooks/useNavigate";

function About() {
  const navigate = useNavigate();

  navigate("/")

  return <div>About</div>;
}

export { About };
