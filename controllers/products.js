const mongodb = require("../db/connect");

const ObjectId = require("mongodb").ObjectId;

const getProducts = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection("products").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getProduct = async (req, res, next) => {
  const productId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection("products")
    .find({ _id: productId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const createProduct = async (req, res) => {
  const product = {
    productName: req.body.productName,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description,
    dateAdded: req.body.date,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("products")
    .insertOne(product);

  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while creating the product."
      );
  }
};

const updateProductData = async (req, res) => {
  const productId = new ObjectId(req.params.id);
  const product = {
    productName: req.body.productName,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description,
    dateAdded: req.body.date,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("products")
    .replaceOne({ _id: productId }, product);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while updating the product."
      );
  }
};

const deleteProduct = async (req, res) => {
  const productId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection("products")
    .deleteOne({ _id: productId }, true);

  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while deleting the product."
      );
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProductData,
  deleteProduct,
};
