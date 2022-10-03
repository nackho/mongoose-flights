const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/flights");

mongoose.connection.on("connected", function() {
    console.log("Successfully connected to MongoDB")
});