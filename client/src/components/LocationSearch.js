import React, { useState } from "react";
import { fetchRestaurantsByLocation } from "../api/api";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import ProductCard from "./ProductCard";
import food from "../assests/food.png"

const LocationSearch = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [results, setResults] = useState([]);
  const [mapUrl, setMapUrl] = useState("");
  const [noResults, setNoResults] = useState(true);

  const handleSearch = async () => {
    if (latitude && longitude) {
      const data = await fetchRestaurantsByLocation(latitude, longitude);
      setResults(data);
      setNoResults(data.length === 0);

      const baseUrl = process.env.REACT_APP_GOOGLE_MAPS_EMBED_URL;
      const newMapUrl = `${baseUrl}?q=${latitude},${longitude}&z=15&output=embed`;
      setMapUrl(newMapUrl);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between",margin:"1%" }}>
      <div style={{ width: "50%" }}>
        <SideBar />
        <div style={{ marginBottom: "20px", display: "flex" }}>
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Enter latitude"
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

          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Enter longitude"
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
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background 0.3s ease",
              width:"100px"
            }}
          >
            Search
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "4%",
            width: "50%",
          }}
        >
          {noResults ? (
            <img
              src={food} 
              alt="No Results"
              style={{
                width: "600px",
                height: "auto",
                display: "block",
                margin: "12vh 100%",
              }}
            />
          ) : (
            results.map((restaurant) => (
              <div key={restaurant._id}>
                <Link to={`/restaurants/${restaurant._id}`}>
                  <ProductCard restaurant={restaurant} />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      <div
        style={{
          width: "65%",
          height: "78vh",
          margin: "11% 2%",
          position: "fixed",
          right: "0",
          top: "0",
        }}
      >
        {mapUrl && (
          <iframe
            title="map"
            src={mapUrl}
            style={{
              border: "none",
              width: "100%",
              height: "90%",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default LocationSearch;
