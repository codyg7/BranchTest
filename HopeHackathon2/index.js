const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const apiKey = "e561179c01f44c33a3ca65bb96eb383f";
const lat = 35.13385;
const long = -81.01888;
const days = 1;
let url = `https://api.breezometer.com/pollen/v2/forecast/daily?lat=${lat}&lon=${long}&key=${apiKey}&days=${days}&features=types_information,plants_information`;

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  request(url, (err, response, body) => {
    if (err) {
      res.render("index", { data: null, error: "Error please try again" });
    } else {
      let { data, error } = JSON.parse(body);
    }
    if (data.length === 0) {
      res.render("index", {
        data: null,
        error: "Sorry there was no data to return here",
      });
    } else {
      let grassText = `${data[0].types.grass.index.category}`;
      res.render("index", { data: grassText, error: null });
    }
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
