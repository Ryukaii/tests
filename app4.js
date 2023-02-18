const express = require("express");
const cors = require("cors");

const { Client, MessageMedia, LocalAuth } = require('whatsapp-web.js');


const app = express();
const port = process.env.port || 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Works!");
});

const client = new Client({
  restartOnAuthFail: true,
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process', // <- this one doesn't works in Windows
      '--disable-gpu'
    ],
  },
  authStrategy: new LocalAuth()
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});