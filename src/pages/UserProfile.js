import React from "react";
import { useParams } from "../hooks/useParams";

function UserProfile() {
  const params = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {params.id}</p>
    </div>
  );
}

export { UserProfile };
