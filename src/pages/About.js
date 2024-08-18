import React from "react";
import { useNavigate } from "../hooks/useNavigate";
import { useLocation } from "../hooks/useLocation";

function About() {
  const location = useLocation();
  console.log(location);
  // const navigate = useNavigate();

  // navigate("/")

  return <div>About</div>;
}

export { About };
