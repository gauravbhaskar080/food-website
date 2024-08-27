// const API_URL = 'http://localhost:5000';
// const API_URL = `https://zomato-uikv.onrender.com`;
const API_URL = `https://food-website-rn1y.onrender.com`;

// Fetching Restaurants data from the backend
export const fetchRestaurants = async () => {
  const response = await fetch(`${API_URL}/api/restaurants`);
  return response.json();
};

// Fetching Restaurants data by MongoDBID from the backend
export const fetchRestaurantById = async (id) => {
  const response = await fetch(`${API_URL}/api/restaurants/${id}`);
  return response.json();
};

// Fetching Restaurants data by Restaurant ID from the backend
export const fetchRestaurantByRestaurantId = async (restaurantID) => {
  const response = await fetch(`${API_URL}/api/restaurants/restaurantID/${restaurantID}`);
  return response.json();
};

// Fetching Restaurants data by Location from the backend
export const fetchRestaurantsByLocation = async (latitude, longitude) => {
  try {
    const response = await fetch(`${API_URL}/api/restaurants/location?latitude=${latitude}&longitude=${longitude}`);
    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching restaurants by location:', error);
    throw error;
  }
};

// Fetching Restaurants data by Name from the backend
export const fetchRestaurantsByName = async (name) => {
  const response = await fetch(`${API_URL}/api/restaurants/name/${name}`);
  return response.json();
};

// Fetching Restaurants data by Cuisines from the backend
export const fetchRestaurantsByCuisines = async (cuisine) => {
  const response = await fetch(`${API_URL}/api/restaurants?cuisines=${encodeURIComponent(cuisine)}`);
  return response.json();
};

// Fetching Restaurants data by Country from the backend
export const fetchRestaurantsByCountry = async (country) => {
  const response = await fetch(`${API_URL}/api/restaurants?country=${encodeURIComponent(country)}`);
  return response.json();
};

// Fetching Restaurants data by Average Cost For Two from the backend
export const fetchRestaurantsByCost = async (cost) => {
  const response = await fetch(`${API_URL}/api/restaurants?averageCostForTwo=${encodeURIComponent(cost)}`);
  return response.json();
};



