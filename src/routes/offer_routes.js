const express = require("express");
const router = express.Router();
const offerController = require("../controllers/offer_controller");

// simple endpoints
router.get("/offers", offerController.getOffers);
router.post("/best-discount", offerController.getBestDiscount);
router.post('/addoffers', offerController.addOffer);
router.post("/createOffers", offerController.createOffers);

module.exports = router;
