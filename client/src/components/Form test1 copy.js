import React from "react";
import { useState, useEffect } from "react";

const [prodList, setProdList] = useState([]);

const addProduct = () => {
    Axios.post("http://localhost:3000/", {
        prod_name: prName,
        prod_price: prPrice,
        prod_qnt: prQnt,
        prod_desc: prDesc,
    }).then((response) => {
        alert("Product added successfully");
        setProdList([
            ...prodList,
            {
                prod_name: prName,
                prod_price: prPrice,
                prod_qnt: prQnt,
                prod_desc: prDesc,
            },
        ]);
    });
};

<div className="form">
    <div className="field">
        <label>Product name</label>
        <input
            type="text"
            placeholder="product name"
            onChange={(event) => {
                setPrName(event.target.value);
            }}
        />
    </div>
    <div className="field">
        <label>Price</label>
        <input
            type="number"
            placeholder="price"
            onChange={(event) => {
                setPrPrice(event.target.value);
            }}
        />
    </div>
    <div className="field">
        <label>Stock</label>
        <input
            type="number"
            placeholder="units in stock"
            onChange={(event) => {
                setPrQnt(event.target.value);
            }}
        />
    </div>
    <div className="field">
        <label>Item description</label>
        <input
            type="text"
            placeholder="description"
            onChange={(event) => {
                setPrDesc(event.target.value);
            }}
        />
    </div>
    <button onClick={addProduct}>ADD PRODUCT</button>
</div>;
