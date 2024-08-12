import React, { useState } from "react";

const ImageSearch = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {};

  return (
    <div
      style={{
        fontWeight: "700",
        fontFamily: "'Georgia', serif",
        textTransform: "uppercase",
        marginTop: "3%",
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by image"
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          outline: "none",
          fontSize: "16px",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginRight: "10px",
          width: "250px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background 0.3s ease",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default ImageSearch;
