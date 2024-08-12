import React, { useEffect, useState } from "react";
import "../styles/mainarea.css";
import Header from "./Header";
import pizzaboy from "../assests/pizzaboy.png";
import pizzaSilce from "../assests/pizzaSilce.png";
import LeftSide from "./LeftSide";
import SideBar from "./SideBar";
import { fetchRestaurants } from "../api/api";
import RestaurantList from "./RestaurantList";

import "../styles/index.css";

const MainArea = () => {
  const [category, setCategory] = useState("pizza");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      const data = await fetchRestaurants();
      setRestaurants(data);
    };

    loadRestaurants();
  }, []);

  return (
    <>
      <SideBar />
      <div style={{ display: "flex", marginLeft: "10px", width: "100vw" }}>
        <div className="mainarea">
          <Header />
          <div className="banner">
            <div className="img">
              <img src={pizzaboy} alt="" />
            </div>
            <div className="text">
              <h2>Hello </h2>
              <p>
                Get Free delivery on <span>500 Rs.</span> and above
              </p>
              <button>Order Now!</button>
              <img
                className="full circle"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png"
                alt=""
              />
              <img
                className="small circle"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png"
                alt=""
              />
              <img
                className="smaller circle"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png"
                alt=""
              />
              <img
                className="half circle"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png"
                alt=""
              />
            </div>
          </div>

          <div className="category-area">
            <h3>Menu</h3>
            <div className="category">
              <div
                className={`cat-icon ${category === "pizza" && "active"} `}
                onClick={() => setCategory("pizza")}
              >
                <div className="img">
                  <img src={pizzaSilce} alt="pizza" />
                </div>
                <div className="text">Pizzas</div>
              </div>
              <div
                className={`cat-icon  ${category === "Burger" && "active"} `}
                onClick={() => setCategory("Burger")}
              >
                <div className="img">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/878/878052.png"
                    alt="burger"
                  />
                </div>
                <div className="text">Burgers</div>
              </div>
              <div
                className={`cat-icon  ${category === "Sandwich" && "active"} `}
                onClick={() => setCategory("Sandwich")}
              >
                <div className="img">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/6518/6518098.png"
                    alt="sandwich"
                  />
                </div>
                <div className="text">Sandwich</div>
              </div>
              <div
                className={`cat-icon  ${category === "Smoothy" && "active"} `}
                onClick={() => setCategory("Smoothy")}
              >
                <div className="img">
                  <img
                    src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/2x/external-ice-cream-carnival-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
                    alt="smoothy"
                  />
                </div>
                <div className="text">Smoothy</div>
              </div>
              <div
                className={`cat-icon  ${category === "Snaks" && "active"} `}
                onClick={() => setCategory("Snaks")}
              >
                <div className="img">
                  <img
                    src="https://img.icons8.com/color/2x/popcorn.png"
                    alt="snacks"
                  />
                </div>
                <div className="text">Snaks</div>
              </div>
              <div
                className={`cat-icon  ${category === "Drink" && "active"} `}
                onClick={() => setCategory("Drink")}
              >
                <div className="img">
                  <img
                    src="https://img.icons8.com/external-itim2101-flat-itim2101/2x/external-drinking-cafe-itim2101-flat-itim2101.png"
                    alt="drink"
                  />
                </div>
                <div className="text">Drinks</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "4%" }}>
            <RestaurantList />
          </div>
        </div>

        <LeftSide />
      </div>
    </>
  );
};

export default MainArea;
