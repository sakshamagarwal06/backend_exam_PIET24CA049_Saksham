
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const bookRoutes = require("./routes/bookRoutes");

const app = express();

// JSON middleware
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// Book routes
app.use("/books", bookRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
    if (error.name === "ValidationError" || error.name === "CastError") {
        return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: "Server error" });
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });
