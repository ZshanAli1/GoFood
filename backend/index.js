const express = require("express");
const app = express();
const mongoDB = require("./db");
const createUserRoute = require("./Routes/CreateUser");
mongoDB();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api", createUserRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
