const express = require("express");
const server = express();
let bodyParser = require("body-parser");
const mongoose = require("mongoose");
let cors = require("cors");
const API =require('./src/routers/router')
var PORT = process.env.PORT || 8086;

server.use(cors());

server.use(bodyParser.json({limit: "25mb"}), bodyParser.urlencoded({
    extended: true
}));

server.get("/", (req, res) => res.send("<h1>Api Run</h1>"));
server.use("/api", API);

const dbPath = "mongodb://127.0.0.1:27017/estrade";
const option = {useNewUrlParser: true, useUnifiedTopology: true};
const mongo = mongoose.connect(dbPath, option);
mongo.then(
    () => console.log("DataBase Connected"),
    (error) => console.log("Error :", error)
)
    .catch(() => console.log("catch"));

server.listen(PORT, () => console.log("Server Start", PORT));
