import React from "react";
import { useLocation } from "../hooks/useLocation";
import { useSearchParams } from "../hooks/useSearchParams";

function About() {
  const location = useLocation();
  const { state } = location;
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const handleSearch = () => {
    setSearchParams({ query: "harold-query" });
  };

  return (
    <>
      <h1>About</h1>
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

export { About };
