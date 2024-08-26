import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRestaurantById } from "../api/api";
import SideBar from "./SideBar";
import "../styles/RestaurantDetail.css";
import loader from "../assests/loader.gif";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const loadRestaurant = async () => {
      const data = await fetchRestaurantById(id);
      setRestaurant(data);
    };

    loadRestaurant();
  }, [id]);

  if (!restaurant)
    return (
      <div className="loader-container">
        <img src={loader} alt="Loading..." className="loader" />
      </div>
    );

  const googleMapsEmbedUrl = `${process.env.REACT_APP_GOOGLE_MAPS_EMBED_URL}?q=${restaurant.Latitude},${restaurant.Longitude}&z=15&output=embed`;
  return (
    <>
      <SideBar />

      <div className="restaurant-detail-container">
        <div className="restaurant-image">
          <img
            src="https://wallpapers.com/images/featured/food-4k-1pf6px6ryqfjtnyr.jpg"
            alt={restaurant.RestaurantName}
            style={{
              width: "80%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg"
              alt={restaurant.RestaurantName}
              style={{
                width: "105.4%",
              }}
            />

            <img
              src="https://img.freepik.com/premium-photo/amazing-food-wallpaper-4k-background_839182-1232.jpg"
              alt={restaurant.RestaurantName}
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>

        <div className="restaurant-name">
          <h1>{restaurant.RestaurantName}</h1>
        </div>
        <div className="restaurant-card">
          <div className="card-details">
            <div className="detail-item">
              <label>Id:</label>
              <div className="value">{restaurant.RestaurantID}</div>
            </div>
            <div className="detail-item">
              <label>Address:</label>
              <div className="value">{restaurant.Address}</div>
            </div>
            <div className="detail-item">
              <label>City:</label>
              <div className="value">{restaurant.City}</div>
            </div>
            <div className="detail-item">
              <label>Cuisines:</label>
              <div className="value">{restaurant.Cuisines}</div>
            </div>
            <div className="detail-item">
              <label>Currency:</label>
              <div className="value">{restaurant.Currency}</div>
            </div>
            <div className="detail-item">
              <label>Aggregate Rating:</label>
              <div className="value">{restaurant.AggregateRating}</div>
            </div>
            <div className="detail-item">
              <label>Locality:</label>
              <div className="value">{restaurant.Locality}</div>
            </div>
            <div className="detail-item">
              <label>Average Cost for Two:</label>
              <div className="value">{restaurant.AverageCostForTwo}</div>
            </div>
            <div className="detail-item">
              <label>Has Table Booking:</label>
              <div className="value">
                {restaurant.HasTableBooking ? "Yes" : "No"}
              </div>
            </div>
            <div className="detail-item">
              <label>Has Online Delivery:</label>
              <div className="value">
                {restaurant.HasOnlineDelivery ? "Yes" : "No"}
              </div>
            </div>
            <div className="detail-item">
              <label>Is Delivering Now:</label>
              <div className="value">
                {restaurant.IsDeliveringNow ? "Yes" : "No"}
              </div>
            </div>
            <div className="detail-item">
              <label>Switch to Order Menu:</label>
              <div className="value">
                {restaurant.SwitchToOrderMenu ? "Yes" : "No"}
              </div>
            </div>
            <div className="detail-item">
              <label>Price Range:</label>
              <div className="value">{restaurant.PriceRange}</div>
            </div>
            <div className="detail-item">
              <label>Rating Color:</label>
              <div className="value">{restaurant.RatingColor}</div>
            </div>
            <div className="detail-item">
              <label>Rating Text:</label>
              <div className="value">{restaurant.RatingText}</div>
            </div>
            <div className="detail-item">
              <label>Votes:</label>
              <div className="value">{restaurant.Votes}</div>
            </div>
            <div className="detail-item">
              <label>Latitude:</label>
              <div className="value">{restaurant.Latitude}</div>
            </div>
            <div className="detail-item">
              <label>Longitude:</label>
              <div className="value">{restaurant.Longitude}</div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="Restaurant Location"
              src={googleMapsEmbedUrl}
              style={{
                border: 0,
                width: "100%",
                height: "300px",
                borderRadius: "10px",
              }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetail;
