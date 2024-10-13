const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoutes = require("./routes/product.routes.js")
const app = express()
require('dotenv').config();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use('/api/products', productRoutes);



app.get('/', (req, res) => {
    res.send("Hello from node 3000 server updated")
});


mongoose.connect("mongodb+srv://sujaysharvesh098:CqpQb1OU8h6MRJoG@backenddb.pjr6k.mongodb.net/Node-api?retryWrites=true&w=majority&appName=backendDB", {

}).then(() => {
    console.log("Connected to MongoDB successfully!");
    app.listen(3000, () => {
        console.log('server is running on port 3000');
    });
}).catch((error) => {
    console.error("Failed to connect to MongoDB", error);
});
