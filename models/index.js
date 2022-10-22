const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URI;
db.product = require("./product.js")(mongoose);

module.exports = db;
