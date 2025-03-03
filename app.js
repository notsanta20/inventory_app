const express = require(`express`);
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
require(`dotenv`).config();
const route = require(`./routes/routes`);

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(`/`, route);

app.listen(
  process.env.PORT,
  console.log(`server started at port ${process.env.PORT}`)
);
