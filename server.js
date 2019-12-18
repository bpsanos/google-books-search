const express = require("express");
const app = express();
const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

const PORT = process.env.PORT || 3001;
// Initialize API server
app.listen(PORT, function() {
});
