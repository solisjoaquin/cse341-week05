const db = require("../models");
const Product = db.product;

// get all products
const getProducts = (req, res) => {
  try {
    Product.find({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

// get only with one product with ID
const getProduct = (req, res) => {
  try {
    const productId = req.params.id;
    Product.find({ _id: productId })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

// create a product
const createProduct = (req, res) => {
  try {
    const product = new Product(req.body);
    product
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the product.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

// update product data with ID
const updateProductData = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      res.status(400).send({ message: "Invalid product" });
      return;
    }
    Product.findOne({ _id: productId }, function (err, product) {
      product.productName = req.body.productName;
      product.price = req.body.price;
      product.category = req.body.category;
      product.description = req.body.description;
      product.dateAdded = req.body.dateAdded;
      product.save(function (err) {
        if (err) {
          res
            .status(500)
            .json(err || "Some error occurred while updating the product.");
        } else {
          res.status(204).send();
        }
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete a product with ID
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      res.status(400).send({ message: "Invalid product id" });
      return;
    }
    Product.deleteOne({ _id: productId }, function (err, result) {
      if (err) {
        res
          .status(500)
          .json(err || "Some error occurred while deleting the product.");
      } else {
        res.status(204).send(result);
      }
    });
  } catch (err) {
    res
      .status(500)
      .json(err || "Some error occurred while deleting the product.");
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProductData,
  deleteProduct,
};
