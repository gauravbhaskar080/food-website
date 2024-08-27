import React from "react";
import LocationSearch from "../components/LocationSearch";

const SearchPage = () => {
  return (
    <div
      style={{
        marginLeft: "100px",
        fontWeight: "700",
        fontFamily: "'Georgia', serif",
        textTransform: "uppercase",
        background: "rgb(241, 241, 241)",
        width:"100vw",
        height: "100%",
      }}
    >
      <h1 style={{ margin: "1%" }}>Search by Location</h1>
      {/* 3rd Page */}
      <LocationSearch />
    </div>
  );
};

export default SearchPage;
