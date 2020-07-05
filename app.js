const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/static", express.static("public"));

// Routes
let productsRoute = require("./routes/products");
app.use(productsRoute);
app.get("/", (req, res) => {
  res.send("hello");
});

//Handler for 404
app.use((req, res, next) => {
  res.status(404).send("Page is not found!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.info(`Server has started on port ${PORT}`));

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}/${process.env.DB_NAME}`,
  { useNewUrlParser: true }
);
