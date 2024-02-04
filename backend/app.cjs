const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error.cjs");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());

// configuring cors
app.use(cors());

// Route imports
const user = require("./routes/userRoutes.cjs");

app.use("/api/v1", user);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
