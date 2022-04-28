const app = require("./app.js");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/users')
const axios = require('axios').default;

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
      .then(() => console.log("reussite"))
      .catch((err) => console.log(err));

app.default.use(bodyParser.json());
app.default.use(bodyParser.urlencoded({extended: false}));
app.default.use("/api/users", users);

// start
const PORT = 4000;
app.default.listen(PORT, () => {
  console.log(`Serveur actif sur le port ${PORT}`);
});
/*
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
*/
