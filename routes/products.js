const express = require("express");
const router = express.Router();

const ProductControl = require("../controllers/ProductControl");

router.get("/products/:pid", (req, res) => {
  res.send(`this is a route for ${req.params.pid}`);
});

router.post("/api/products/create", ProductControl.create);
router.post("/api/products/update", ProductControl.update);
router.get("/api/products/getAll", ProductControl.find);
router.get("/api/products/:pid", ProductControl.findOne);

module.exports = router;
