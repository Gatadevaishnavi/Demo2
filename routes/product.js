const express = require("express");
const getProduct = require("../controller/productController");

const router = express.Router();

router.get("/", getProduct);

module.exports = router;
