const app = require("./app.cjs");
const env = require("dotenv");
const connectDatabase = require("./config/database.cjs");

// Handling Uncaught Exception (e.g., console.log(youtube) )
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

// Config
env.config({ path: "BACKEND/config/config.env" });

// Connecting to the database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise rejection (e.g., typo in the DB URL)
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
