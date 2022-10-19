const express = require("express");

const router = express.Router();

const products = require("./products");

router.use("/", require("./swagger"));

router.use("/products", products);

module.exports = router;
