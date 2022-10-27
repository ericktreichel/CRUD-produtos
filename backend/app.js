const express = require("express");
require("dotenv").config();
const path = require("path");
const rootRoute = require("./src/routes/index");
require("./config/database");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", rootRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "/../client/build/index.html"));
    });
}

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port 3000`);
});
