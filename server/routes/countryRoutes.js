const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

router.get('/code/:countryName', countryController.getCountryCodeByName);

module.exports = router;
