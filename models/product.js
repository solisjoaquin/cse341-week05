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
      minLength: [5, "Description too short.. Try again with more details"],
    },
    dateAdded: {
      type: String,
    },
  });

  return mongoose.model("products", productSchema);
};
