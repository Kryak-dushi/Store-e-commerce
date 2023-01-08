const express = require("express");
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const PORT = 3000;
const URL = "mongodb://localhost:27017/mstore_db";

mongoose
  .connect(URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const goodRouter = require('./routes/good-router');
const userRouter = require('./routes/user-router');
const cartRouter = require('./routes/cart-router');

const app = express();
app.use(express.json());
app.use(goodRouter);
app.use(userRouter);
app.use(cartRouter);

app.listen(PORT);