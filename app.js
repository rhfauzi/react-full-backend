var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var expressJWT = require("express-jwt");

// var usersRouter = require("./routes/users");

var app = express();

app.use(cors());
// app.use(logger("dev"));
app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "assets")));

app.use(
  expressJWT({ secret: "INISECRET" }).unless({
    patch: [
      { url: "/", method: ["GET"] },
      {
        url: "/user/login",
        method: ["post"]
      }
    ]
  })
);
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).send({ message: "You are not a member" });
  } else {
    return next();
  }
});

app.use("/todos", require("./routes/todos"));
app.use("/users", require("./routes/users"));
app.use("/hoby", require("./routes/hoby"));

app.use("/assets", express.static("assets"));

module.exports = app;
