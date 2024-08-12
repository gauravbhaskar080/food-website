const Country = require('../models/CountryCode'); 
exports.getCountryCodeByName = async (req, res) => {
  try {
    const country = await Country.findOne({ CountryName: req.params.countryName });
    if (!country) return res.status(404).json({ msg: 'Country not found' });
    res.json({ countryCode: country.CountryCode });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
