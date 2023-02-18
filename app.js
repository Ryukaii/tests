const express = require("express");
const cors = require("cors");


const app = express();
const port = process.env.port || 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Works!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});