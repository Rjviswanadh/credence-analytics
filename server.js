const express = require("express");
//const cors = require("cors");
//const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const mongoClient = require("mongoclient");
const app = express();
//app.use(cors());
app.use(express.json());
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

app.get("/getmovies", async (req, res) => {
  const getdata = await db.collection("movies").find().toArray();
  console.log(getdata);
});
app.post("/createpost", async (req, res) => {
  const { name, img, summary } = req.body;
  const updatedata = await db
    .collection("movies")
    .insertOne({ name: `${name}`, img: `${img}`, summary: `${summary}` });
  console.log(updatedata);
});
app.put("/updatepost", async (req, res) => {
  const { name, summary } = req.body;
  const updateone = await db
    .collection("movies")
    .updateOne({ name: `${name}` }, { $set: { summary: `${summary}` } });
  res.send("updated successfully");
});
app.delete("/deleteone", async (req, res) => {
  const { name } = req.body;
  const deleteone = await db
    .collection("movies")
    .deleteOne({ name: `${name}` });
  res.send("deleted successfully");
});
