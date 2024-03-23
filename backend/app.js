const express = require("express");
const cors = require("cors");
const { getUser } = require("./controllers/userController");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.get("/api/v1/user", getUser);

module.exports = app;
