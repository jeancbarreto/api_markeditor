const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

const db = require("./db");
global.__root = __dirname + "/";

app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Settings
app.set("port", process.env.PORT || 3000);

// set the view engine to ejs
app.set("view engine", "ejs");

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + "/public"));

// set the home page route
app.get("/", function(req, res) {
  // ejs render automatically looks in the views folder
  res.render("index");
});

app.get("/api", function(req, res) {
  res.json({
    message: "Welcome to API"
  });
});

// Routes Users
const UserController = require(__root + "user/UserController");
app.use("/api/v1/users", UserController);
const AuthController = require(__root + "auth/AuthController");
app.use("/api/v1/auth", AuthController);

// Routes Pages
app.use("/api/v1/document", require("./routes/Archivos"));


// Server in listening
app.listen(app.get("port"), () => {
  console.log("Server on port ", app.get("port"));
});
