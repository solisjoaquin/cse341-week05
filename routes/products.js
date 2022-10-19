const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.getProducts);

router.get("/:id", productsController.getProduct);
// POST
router.post("/", productsController.createProduct);
// PUT
router.put("/:id", productsController.updateProductData);
// DELETE
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
