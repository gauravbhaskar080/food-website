const mongoose = require("mongoose");

const CountryCodeSchema = new mongoose.Schema({
  CountryCode: {
    type: Number,
  },
  Country: {
    type: String,
  },
});

const CountryCode = mongoose.model("CountryCode", CountryCodeSchema);

module.exports = CountryCode;
