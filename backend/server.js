const express = require("express");
const helmet = require("helmet");

const searchItunes = require("./itunes");

const app = express();

// secure the express app by using helmet
app.use(helmet());

// performs a search to the itunes api
app.get("/search", function (req, res) {
  searchItunes(req.query.term, req.query.media)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
});

app.get("*", function (req, res, next) {
  let err = new Error("Sorry! Can’t find that resource. Please check your URL");
  err.statusCode = 404;
  res.send({ error: err.message });
});

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
