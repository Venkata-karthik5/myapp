var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main');

/* GET home page. */
router.get('/', mainController.home);

/* GET about page. */
router.get('/about', mainController.about);

/* GET contact page. */
router.get('/contact', mainController.contact);

/* GET location page. */
router.get('/location', mainController.location);

/* GET review page. */
router.get('/review', mainController.review);

module.exports = router; 