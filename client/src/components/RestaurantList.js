import React, { useEffect, useState } from "react";
import {
  fetchRestaurants,
  fetchRestaurantByRestaurantId,
  fetchRestaurantsByName,
  fetchRestaurantsByCuisines,
  fetchRestaurantsByCountry,
  fetchRestaurantsByCost
} from "../api/api";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const cuisinesList = [
  "French",
  "Japanese",
  "Desserts",
  "Seafood",
  "Asian",
  "Filipino",
  "Indian",
  "Sushi",
  "Korean",
  "Chinese",
  "European",
  "American",
  "Mexican",
  "Italian",
  "Cafe",
  "Bakery",
  "Brazilian",
  "Arabic",
  "Vietnamese",
  "Thai",
  "Mediterranean",
  "Burger",
  "BBQ",
  "Healthy Food",
  "Juices",
  "Tapas",
  "Latin American",
  "International",
  "German",
  "Modern Australian",
  "Coffee and Tea",
  "Sandwich",
  "French",
  "Brazilian",
  "Chinese",
  "Cuban",
];

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [averageCostForTwo, setAverageCostForTwo] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const [searchResult, setSearchResult] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        if (data && Array.isArray(data)) {
          setRestaurants(data);
          setTotalPages(Math.ceil(data.length / pageSize));
        } else {
          // Handle unexpected data format
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error loading restaurants:', error);
      }
    };
  
    loadRestaurants();
  }, []);
  
  
  useEffect(() => {
    const loadFilteredRestaurants = async () => {
      const data = await fetchRestaurantsByCuisines(selectedCuisine);
      console.log(data.length);
      setRestaurants(data);
      setTotalPages(Math.ceil(data.length / pageSize));
      setCurrentPage(1)
    };

    if (selectedCuisine) {
      loadFilteredRestaurants();
    }
  }, [selectedCuisine]);
  useEffect(() => {
    const loadFilteredRestaurants = async () => {
      const data = await fetchRestaurantsByCountry(selectedCountry);
      console.log(data.length);
      setRestaurants(data);
      setTotalPages(Math.ceil(data.length / pageSize));
      setCurrentPage(1)
    };

    if (selectedCountry) {
      loadFilteredRestaurants();
    }
  }, [selectedCountry]);

  useEffect(() => {
    const loadFilteredRestaurants = async () => {
      const data = await fetchRestaurantsByCost(averageCostForTwo);
      console.log(data.length);
      setRestaurants(data);
      setTotalPages(Math.ceil(data.length / pageSize));
      setCurrentPage(1)
    };

    if (averageCostForTwo) {
      loadFilteredRestaurants();
    }
  }, [averageCostForTwo]);

  const handleSearchIdChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleSearchNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleCuisineChange = (e) => {
    setSelectedCuisine(e.target.value);
  };
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleAverageCostChange = (e) => {
    setAverageCostForTwo(e.target.value);
  };

  const handleSearchIdSubmit = async (e) => {
    e.preventDefault();
    if (searchId) {
      const result = await fetchRestaurantByRestaurantId(searchId);
      setSearchResult(result);
      setCurrentPage(1);
    }
  };

  const handleSearchNameSubmit = async (e) => {
    e.preventDefault();
    if (searchName) {
      const result = await fetchRestaurantsByName(searchName);
      setSearchResult(result);
      setCurrentPage(1);
    }
  };

  const handleBackClick = () => {
    setSearchResult(null);
    setSearchId("");
    setSearchName("");
    setSelectedCuisine("");
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, restaurants.length);
  const currentRestaurants = restaurants.slice(startIndex, endIndex);

  return (
    <div>
      <h3>Restaurants</h3>
      <div
        style={{
          display: "flex",
          columnGap: "20px",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <form onSubmit={handleSearchIdSubmit}>
          <input
            type="text"
            placeholder="Search by Restaurant ID"
            value={searchId}
            onChange={handleSearchIdChange}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              outline: "none",
              fontSize: "16px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              marginRight: "10px",
            }}
          />
          <button
            type="submit"
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
        </form>

        <form onSubmit={handleSearchNameSubmit}>
          <input
            type="text"
            placeholder="Search by Restaurant Name"
            value={searchName}
            onChange={handleSearchNameChange}
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
            type="submit"
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
        </form>

        {searchResult && (
          <button
            onClick={handleBackClick}
            style={{
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
          >
            Back
          </button>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          columnGap: "20px",
          margin: "5% 0",
        }}
      >
        <select
          value={selectedCuisine}
          onChange={handleCuisineChange}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <option value="">Select Cuisine</option>
          {cuisinesList.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Average Cost for Two (less than this amount)"
          value={averageCostForTwo}
          onChange={handleAverageCostChange}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            outline: "none",
            fontSize: "16px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginLeft: "10px",
            width: "400px",
          }}
        />
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="Brazil">Brazil</option>
          <option value="Canada">Canada</option>
          <option value="Indonesia">Indonesia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Phillipines">Phillipines</option>
          <option value="Qatar">Qatar</option>
          <option value="Singapore">Singapore</option>
          <option value="South Africa">South Africa</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Turkey">Turkey</option>
          <option value="UAE">UAE</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
        </select>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {searchResult ? (
          <div style={{ flex: "0 1 100%" }}>
            <Link to={`/restaurants/${searchResult._id}`}>
              <ProductCard restaurant={searchResult} />
            </Link>
          </div>
        ) : (
          currentRestaurants.map((restaurant) => (
            <div key={restaurant._id} style={{ flex: "0 1 48.5%" }}>
              <Link to={`/restaurants/${restaurant._id}`}>
                <ProductCard restaurant={restaurant} />
              </Link>
            </div>
          ))
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={handleFirstPage}
          disabled={currentPage === 1}
          style={{ padding: "10px 20px", margin: "0 5px" }}
        >
          First
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ padding: "10px 20px", margin: "0 5px" }}
        >
          Previous
        </button>
        <span style={{ padding: "10px 20px", margin: "0 5px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ padding: "10px 20px", margin: "0 5px" }}
        >
          Next
        </button>
        <button
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
          style={{ padding: "10px 20px", margin: "0 5px" }}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default RestaurantList;
