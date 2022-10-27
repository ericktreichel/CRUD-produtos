const mongoose = require("mongoose");

// Creating a connection between the application and the database in the cloud
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoBD Atlas"))
    .catch((err) => console.error(err));
