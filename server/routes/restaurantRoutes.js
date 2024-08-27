const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/', restaurantController.getRestaurants);
router.get('/:id', restaurantController.getRestaurantById); 
router.get('/name/:name', restaurantController.getRestaurantByName);         
router.get('/location', restaurantController.getRestaurantsByLocation);
router.get('/restaurantID/:restaurantID', restaurantController.getRestaurantByRestaurantId);


// router.get('/rating/:rating', restaurantController.getRestaurantByRating);
// router.get('/ratingText/:ratingText', restaurantController.getRestaurantByRatingText);
// router.get('/currency/:currency', restaurantController.getRestaurantByCurrency);



module.exports = router;
