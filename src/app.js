const express = require("express");
const app = express();
const offer_routes = require("./routes/offer_routes");

app.use(express.json()); // parse JSON payload
app.use("/api",offer_routes);

module.exports = app;
