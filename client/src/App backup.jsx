import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "./components/Form";
import "./App.css";
import axios from "axios";

function App() {
    // States used to show product info
    const [prodList, setProdList] = useState([]);
    // States used to get info from form and sent it to backend
    const [prName, setPrName] = useState("");
    const [prPrice, setPrPrice] = useState("");
    const [prQnt, setPrQnt] = useState("");
    const [prDesc, setPrDesc] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000").then((response) => {
            setProdList(response.data);
        });
    }, []);

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

    return (
        <div className="App">
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
            </div>
            ;<Form></Form>
            <div className="grid">
                {prodList.map((product) => {
                    return (
                        <div className="item">
                            <p>Product name: {product.prod_name}</p>
                            <p>Product price: {product.prod_price}</p>
                            <h4>Stock: {product.prod_qnt}</h4>
                            <h4>Description: {product.prod_desc}</h4>
                            <h4>Product ID: {product.prod_id}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
