const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../untils/wrapAsync.js");
const ExpressError = require("../untils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js")

const reviewController = require("../controllers/reviews.js");


//Posts Review Route
router.post("/", isLoggedIn,validateReview, wrapAsync (reviewController.createReview));
  
  //Delete Review Route
  router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;