const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") })
const express = require("express");
const cors = require("cors");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const usersRouter = require("./users/users.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter)

app.use(notFound);
app.use(errorHandler);

module.exports = app;