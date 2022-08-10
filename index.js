const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();

app.use(express.json());
const swaggerDocument = YAML.load("./docs/swagger.yaml");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("*", (req, res) => {
  res.redirect("/api-docs");
});

app.listen("8080", () => {
  console.log(`Server running 8080`);
});
