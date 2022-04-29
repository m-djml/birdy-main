const path = require('path');
const api = require('./api.js');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./api.js')

// Détermine le répertoire de base
const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
      .then(() => console.log("reussite"))
      .catch((err) => console.log(err));

const app = express()
api_1 = require("./api.js");
const session = require("express-session");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api.js", users);

app.use(session({
    secret: "technoweb rocks",
    resave: true,
    saveUninitialized: true
}));

app.use('/api', api);

// Démarre le serveur
app.on('close', () => {
});
exports.default = app;
