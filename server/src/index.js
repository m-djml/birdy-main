const app = require("./app.js");
const express = require('express');
const port = 27017;

const mongoose = require('mongoose');
const cors = require("cors");

mongoose
.connect("mongodb://127.0.0.1/", {
    /*dbName: 'yourDB-name',*/
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.default.use(cors());
app.default.use(express.json());

app.default.listen(port, () => {
  console.log(`Serveur actif sur le port ${port}`);
});
