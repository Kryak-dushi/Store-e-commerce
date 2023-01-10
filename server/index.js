const express = require("express");
var cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose.set('strictQuery', true);

const PORT = 3001;
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
app.use(cookieParser());
app.use(cors());
app.options('*', cors()) 
app.use(goodRouter);
app.use(userRouter);
app.use(cartRouter);

app.listen(PORT);