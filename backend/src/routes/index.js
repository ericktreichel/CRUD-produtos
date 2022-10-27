const express = require("express");
const router = express.Router();
const ProductController = require("../Controllers/ProductController");

// GET all - Return the whole list of products in the database
router.get("/", ProductController.indexP);

// POST - Add a new product to the database
router.post("/", ProductController.addP);

// PUT one - Change some product information
router.put("/:id", ProductController.updateP);

// DELETE one - Remove the selected product
router.delete("/remove/:id", ProductController.delP);

module.exports = router;
