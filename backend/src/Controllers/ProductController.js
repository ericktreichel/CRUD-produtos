const ProdModel = require("../models/Products");

class ProductController {
    // insert a product into the database
    async addP(req, res) {
        try {
            const newProduct = await ProdModel.create(req.body);

            return res.status(200).json(newProduct);
        } catch (err) {
            return res
                .status(404)
                .json({
                    message:
                        "A problem occured while trying to add the product",
                });
        }
    }
    // return the whole database
    async indexP(req, res) {
        try {
            const products = await ProdModel.find({});

            return res.status(200).json(products);
        } catch (err) {
            return res
                .status(500)
                .json({
                    message:
                        "A problem occured while trying to get the requested information",
                });
        }
    }
    // returns a specific product
    async showP(req, res) {
        try {
            const { id } = req.params;
            const product = await ProdModel.findById(id);

            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
        } catch (err) {
            return res.status(200).json(product);
        }
    }
    // update a specific product
    async updateP(req, res) {
        try {
            const { id } = req.params;
            await ProdModel.findByIdAndUpdate(id, req.body);
            return res
                .status(200)
                .json({ message: "Product update successfully" });
        } catch (err) {
            return res.status(404).json({
                message:
                    "A problem occured while trying to update the product information",
            });
        }
    }
    // delete a specific product
    async delP(req, res) {
        try {
            const { id } = req.params;
            await ProdModel.findByIdAndDelete(id, req.body);
            return res
                .status(200)
                .json({ message: "Product deleted successfully" });
        } catch (err) {
            return res.status(404).json({
                message:
                    "A problem occured while trying to update the product information",
            });
        }
    }
}

module.exports = new ProductController();
