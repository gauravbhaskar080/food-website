const Restaurant = require("../models/Restaurant");
const CountryCode = require("../models/CountryCode");
const geolib = require("geolib");
const client = require("../config/redis");


//For Filters
const constructSearchQuery = async (queryParams) => {
  let constructedQuery = {};

  if (queryParams.cuisines) {
    const cuisines = Array.isArray(queryParams.cuisines)
      ? queryParams.cuisines
      : [queryParams.cuisines];

    constructedQuery.Cuisines = {
      $regex: cuisines.map((cuisine) => `\\b${cuisine}\\b`).join("|"),

      $options: "i",
    };
  }

  if (queryParams.averageCostForTwo) {
    constructedQuery.AverageCostForTwo = {
      $lte: parseInt(queryParams.averageCostForTwo),
    };
  }

  if (queryParams.country) {
    const countryCode = await CountryCode.findOne({
      Country: queryParams.country,
    });
    if (countryCode) {
      constructedQuery.CountryCode = countryCode.CountryCode;
    }
  }

  return constructedQuery;
};

//Get Restaurants List and use for filter
exports.getRestaurants = async (req, res) => {
  const { page = 1, limit = 10000 } = req.query;
  try {
    const query = await constructSearchQuery(req.query);
    const cacheKey = `restaurants:${JSON.stringify(query)}:page=${page}:limit=${limit}`;
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }
    const restaurants = await Restaurant.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    
    await client.setEx(cacheKey, 3600, JSON.stringify(restaurants));
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

//Get Restaurants List by MongoDB ID
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant)
      return res.status(404).json({ msg: "Restaurant not found" });
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

//Get Restaurants List by Restaurant ID
exports.getRestaurantByRestaurantId = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      RestaurantID: req.params.restaurantID,
    });
    if (!restaurant)
      return res.status(404).json({ msg: "Restaurant not found" });
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};


//Get Restaurants List (in 10km radius) by Location -> Latitude and Longitude
exports.getRestaurantsByLocation = async (req, res) => {
  const { latitude, longitude } = req.query;
  try {
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    const boundingBox = geolib.getBoundsOfDistance(
      { latitude: lat, longitude: lon },
      10000
    );

    const restaurants = await Restaurant.find({
      Latitude: {
        $gte: boundingBox[0].latitude,
        $lte: boundingBox[1].latitude,
      },
      Longitude: {
        $gte: boundingBox[0].longitude,
        $lte: boundingBox[1].longitude,
      },
    });

    const nearbyRestaurants = restaurants.filter((restaurant) =>
      geolib.isPointWithinRadius(
        { latitude: restaurant.Latitude, longitude: restaurant.Longitude },
        { latitude: lat, longitude: lon },
        3000
      )
    );

    res.json(nearbyRestaurants);
  } catch (err) {
    console.error("Error fetching restaurants by location:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

//Get Restaurants List by Restaurant Name
exports.getRestaurantByName = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      RestaurantName: { $regex: req.params.name, $options: "i" },
    });
    if (!restaurant)
      return res.status(404).json({ msg: "Restaurant not found" });
    res.json(restaurant);
  } catch (err) {
    console.error("Error fetching restaurant by name:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
