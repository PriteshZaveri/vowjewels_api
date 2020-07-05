const ProductModel = require("../models/ProductModel");

let productHelper = {
  create: (req, res) => {
    ProductModel.create(req.body)
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    ProductModel.updateOne({ pid: req.body.pid }, req.body)
      .then(product => {
        res.json(product);
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  find: (req, res) => {
    ProductModel.find()
      .then(products => {
        if (!products) res.json({ success: false, result: "No results found" });
        res.json({ success: true, products });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  findOne: (req, res) => {
    ProductModel.find()
      .then(products => {
        if (!products) res.json({ success: false, result: "No results found" });
        res.json({ success: true, products });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  }
};

module.exports = { ...productHelper };
