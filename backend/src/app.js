const express = require("express");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const app = express();

app.use(notFound);
app.use(errorHandler);

module.exports = app;