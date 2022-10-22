module.exports = (mongoose) => {
  const productSchema = mongoose.Schema({
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dateAdded: {
      type: String,
    },
  });

  return mongoose.model("products", productSchema);
};
