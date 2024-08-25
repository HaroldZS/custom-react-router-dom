import React from "react";
import { useParams } from "../hooks/useParams";
import { useLocation } from "../hooks/useLocation";
import { useSearchParams } from "../hooks/useSearchParams";

function UserProfile() {
  const location = useLocation();
  const { state } = location;
  console.log(location);
  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const handleSearch = () => {
    setSearchParams({ query: "harold-query" });
  };

  return (
    <>
      <h1>User Profile</h1>
      <p>User ID: {params.id}</p>

      {state && (
        <section>
          <h2>State section</h2>
          {Object.keys(state).map((key) => (
            <p>
              <b>{key}: </b>
              {state[key]}
            </p>
          ))}
        </section>
      )}
      {query && (
        <section>
          <h2>Search side</h2>
          <p>Search Query: {query}</p>
          <button onClick={handleSearch}>Search New Query</button>
        </section>
      )}
    </>
  );
}

export { UserProfile };
