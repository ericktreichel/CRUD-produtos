const mongoose = require("mongoose");

//  Defining a structure for the data, to ensure data consistency

const ProdSchema = new mongoose.Schema({
    prod_id: {
        type: Number,
        required: true,
        unique: true,
        index: true,
    },
    prod_name: {
        type: String,
        required: true,
    },
    prod_price: {
        type: Number,
        required: true,
        default: 0,
    },
    prod_qnt: {
        type: Number,
        required: true,
        default: 0,
    },
    prod_desc: {
        type: String,
    },
    prod_mod: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

// I intended to have also implemented a filter for the last modification of the products,
// but I didn't have time, so this 'prod_mod' field was not used

const ProdModel = mongoose.model("products", ProdSchema);

module.exports = ProdModel;
