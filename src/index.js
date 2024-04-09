const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const port = 5000;

const route = require("./routes");

const db = require("./config/db");

// connect DB
db.connect();

const app = express();

// http logger
app.use(morgan("combined"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// template engine
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// route init
route(app);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
