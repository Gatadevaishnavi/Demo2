const express = require("express");
const { Sequelize } = require("sequelize");
const productRouter = require("./routes/product");
const sequelize = require("./config/dbconnect");
const app = express();

const port = 3000;

app.use(express.json());

//router

app.use("/api/products", productRouter);



sequelize.sync().then(() => {
  console.log("Database Connected ");
  app.listen(port, () => {
    console.log(`server listening on ${port}`);
  });
});
