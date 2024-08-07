/*in cmd npm init -y
npm i nodemon
npm i express
npm run dev
npm i dotenv 
npm i mongoose*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
const blog = require("./routes/blog");

//Mount

app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT, () => {
  console.log(`App Is Started At the ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Welocome To The Home page</h1>`);
});
