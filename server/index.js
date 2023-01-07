const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const PORT = 3000;
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
const db = client.db("mstore_db");

app.get('/goods', (req, res) => {
  const goods = [];
  db
    .collection("goods")
    .find({})
    .forEach(good => goods.push(good))
    .then(() => {
      res
        .status(200)
        .json(goods);
    })
    .catch(() => {
      res.status(500)
        .json({ error: "Error" })
    })
})

app.get('/cart', (req,res) =>{
  const cart = [];
  db
    .collection("users")
    .find({cart:{$exists: true, $not: {$size: 0}}})
    .forEach(user => cart.push(user.cart))
    .then(() => {
      res
        .status(200)
        .json(cart);
    })
    .catch(() => {
      res.status(500)
        .json({ error: "Error" })
    })
})

app.listen(PORT);