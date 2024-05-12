const express = require("express");
require("dotenv").config();
const database = require("./src/configs/dbConnect");
const RedisClient = require("./src/configs/redisClient");
const redisClient = new RedisClient();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => console.log("server is running in port 3000"));
