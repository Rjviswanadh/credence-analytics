const express = require("express");
//const cors = require("cors");
//const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const mongoClient = require("mongoclient");
const app = express();
//app.use(cors());
//app.use(bodyParser());
let db;

const url =
  "mongodb+srv://viswanadh_123:kasi_123@atlascluster.n7cgp0f.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url)
  .then((database) => {
    db = database.db("Assignment");
    console.log("database connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3005, () => {
  console.log("server running at 3000");
});

app.get("/get", async (req, res) => {
  const getdata = await db.collection("movies").find().toArray();
  console.log(getdata);
});
app.post("/get", async (req, res) => {
  const getdata = await db.collection("movies").console.log(getdata);
});
app.put("/get", async (req, res) => {
  const getdata = await db.collection("movies").find().toArray();
  console.log(getdata);
});
app.delete("/get", async (req, res) => {
  const getdata = await db.collection("movies").find().toArray();
  console.log(getdata);
});
