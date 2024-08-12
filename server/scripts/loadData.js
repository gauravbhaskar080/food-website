const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
const Restaurant = require('../models/Restaurant');
const CountryCodes = require('../models/CountryCode');
require('dotenv').config();
const { Transform } = require('stream');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, 
}).then(async () => {
  console.log('MongoDB connected');
  await loadCSVData();
  // await loadCountryCodeCSVData();
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

const removeBOM = new Transform({
  transform(chunk, encoding, callback) {
    let data = chunk.toString();
    if (data.charCodeAt(0) === 0xFEFF) {
      
      data = data.slice(1);
    }
    callback(null, data);
  }
});

async function loadCSVData() {
  const restaurants = [];

  fs.createReadStream('Data/zomato.csv',  { encoding: 'utf8' })
    .pipe(removeBOM)
    .pipe(csv())
    .on('data', (row) => {
      // console.log(row);
      const restaurant = new Restaurant({
        RestaurantID: parseInt(row['Restaurant ID']),
        RestaurantName: row['Restaurant Name'],
        CountryCode: row['Country Code'],
        City: row['City'],
        Address: row['Address'],
        Locality: row['Locality'],
        LocalityVerbose: row['Locality Verbose'],
        Longitude: parseFloat(row['Longitude']),
        Latitude: parseFloat(row['Latitude']),
        Cuisines: row['Cuisines'],
        AverageCostForTwo: parseInt(row['Average Cost for two']),
        Currency: row['Currency'],
        HasTableBooking: row['Has Table booking'].toLowerCase() === 'yes',
        HasOnlineDelivery: row['Has Online delivery'].toLowerCase() === 'yes',
        IsDeliveringNow: row['Is delivering now'].toLowerCase() === 'yes',
        SwitchToOrderMenu: row['Switch to order menu'].toLowerCase() === 'yes',
        PriceRange: parseInt(row['Price range']),
        AggregateRating: parseFloat(row['Aggregate rating']),
        RatingColor: row['Rating color'],
        RatingText: row['Rating text'],
        Votes: parseInt(row['Votes']),
      });
      restaurants.push(restaurant);
    })
    .on('end', async () => {
      try {
        await Restaurant.insertMany(restaurants);
        console.log('Restaurants CSV Data loaded successfully!');
      } catch (err) {
        console.error('Failed to load Restaurants CSV data', err);
      }
    });
}

async function loadCountryCodeCSVData() {
  const countryCodes = [];

  fs.createReadStream('Data/Country-Code.csv')
    .pipe(csv())
    .on('data', (row) => {
      const countryCode = new CountryCodes({
        CountryCode: parseInt(row['Country Code']),
        Country: row['Country']
      });
      countryCodes.push(countryCode);
    })
    .on('end', async () => {
      try {
        await CountryCodes.insertMany(countryCodes);
        console.log('Country Code CSV Data loaded successfully!');
      } catch (err) {
        console.error('Failed to load Country Code CSV data', err);
      }
    });
}
