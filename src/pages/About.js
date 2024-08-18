import React from "react";
import useNavigate from "../hooks/useNavigate";
import { useLocation } from "../hooks/useLocation";

function About() {
  // const navigate = useNavigate();

  // navigate("/")

  const location = useLocation();
  console.log(location);

  return <div>About</div>;
}

export { About };
