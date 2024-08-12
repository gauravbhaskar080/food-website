const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/location', restaurantController.getRestaurantsByLocation);
router.get('/restaurantID/:restaurantID', restaurantController.getRestaurantByRestaurantId);
router.get('/name/:name', restaurantController.getRestaurantByName);  
router.get('/:id', restaurantController.getRestaurantById);
router.get('/', restaurantController.getRestaurants);

module.exports = router;
