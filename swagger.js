const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API docs",
    description: "Temple API",
  },
  host: "localhost:8080",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
