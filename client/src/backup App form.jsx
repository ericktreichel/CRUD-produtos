import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Axios from "axios";

function App() {
    const [prodList, setProdList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3000/").then((response) => {
            setProdList(response.data);
        });
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    return (
        <div className="App">
            <div className="grid">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <label>Product name</label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            {...register("Product Name", {
                                required: true,
                                max: 128,
                                min: 2,
                                maxLength: 128,
                            })}
                        />
                    </div>
                    <div className="field">
                        <label>Price:</label>
                        <input
                            type="undefined"
                            placeholder="Price"
                            {...register}
                        />
                    </div>
                    <div className="field">
                        <label>Stock:</label>
                        <input
                            type="undefined"
                            placeholder="Stock"
                            {...register}
                        />
                    </div>
                    <div className="field">
                        <label>Description:</label>
                        <input
                            type="undefined"
                            placeholder="Prod Description"
                            {...register}
                        />
                    </div>

                    <input type="submit" />
                </form>
            </div>

            <div className="usersDisplay">
                {prodList.map((product) => {
                    return (
                        <div>
                            <h1>Product name: {product.prod_name}</h1>
                            <h2>Product price: {product.prod_price}</h2>
                            <h2>Product ID: {product.prod_id}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
