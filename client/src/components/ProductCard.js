import React from "react";
// import "../styles/mainarea.css"; 
const convertColorNameToCSS = (colorName) => {
  if (!colorName) return "#90ee90"; 

  const colorMap = {
    "Dark Green": "green",
    "Light Green": "green",
    "Orange": "orange",
    "White": "white",
    "Yellow": "yellow",
  };

  return colorMap[colorName] || "#90ee90";
};

const ProductCard = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }
  const ratingColor = convertColorNameToCSS(restaurant.RatingColor);
  const textColor = ratingColor === "yellow" || ratingColor === "white" ? "black" : "white";

  return (
    <div className="product-card" style={{ width: "100%", height: "350px" }}>
      <div className="product-card-image">
        <img
          src="https://b.zmtcdn.com/data/pictures/7/20296707/73a4750cf938c4f6d63a1963adc8b243_o2_featured_v2.jpg?output-format=webp"
          alt={restaurant.RestaurantName}
          style={{ width: "100%", height: "230px", borderRadius: "10px" }}
        />
      </div>
      <div className="product-card-info">
        <div className="product-card-header">
          <h4 className="text-primary text-3xl font-bold">
            {restaurant.RestaurantName}
          </h4>
          <div
            className="product-card-rating"
            style={{ backgroundColor: ratingColor, color: textColor }}
          >
            {restaurant.AggregateRating}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between",columnGap: "5px" }}>
          <p className="text-text-gary" style={{ fontSize: "14px" }}>
            <strong>City:</strong> {restaurant.City}
          </p>
          <p
            className="text-text-gary"
            style={{ fontSize: "14px", textAlign: "right" }}
          >
            <strong>Cuisines:</strong> {restaurant.Cuisines}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
