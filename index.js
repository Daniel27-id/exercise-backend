const http = require("http");
const express = require("express");
const morgan = require("morgan");
const errorhandler = require("errorhandler");
const moment = require("moment");
const users = require("./users");

const app = express();

const log = (req, res, next) => {
    console.log(
      moment().format("h:mm:ss a") + " " + req.originalUrl + " " + req.ip
    );
    next();
};

app.use(morgan("tiny"));
app.use(errorhandler());

app.get("/users", (req, res) => {
  res.json({ status: "success", data: users });
});

app.use((req, res) => {
  res.status(404).json({
    message: "data user tidak ditemukan",
  });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(404).json({
      status: "error",
      message: "resource tidak di temukan",
    });
  });
  

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "terjadi kesalahan pada server",
  });
});

const hostname = "127.0.0.1";
const port = 3000;
app.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}`)
);
