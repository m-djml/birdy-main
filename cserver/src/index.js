const app = require("./app.js");
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/users')

dotenv.config();

mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});

app.default.use(bodyParser.json());
app.default.use(bodyParser.urlencoded({extended: false}));

// start
const PORT = 4000;
app.default.listen(process.env.PORT, () => {
  console.log(`Serveur actif sur le port ${PORT}`);
});
