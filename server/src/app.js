var MongoStore = require('connect-mongo');
var MongoClient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/test";
const client = new MongoClient(dburl);
const path = require('path');
const api = require('./api.js');

async function main() {
  const res = new Promise((resolve, reject) =>
  {
    setTimeout(() => {
      resolve(MongoClient.connect(dburl, { useNewUrlParser: true }));
    }, 2000);
  });

  return res;
}
main().catch(err => console.log(err));

// Détermine le répertoire de base
const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

express = require('express');
const app = express()
api_1 = require("./api.js");
const session = require("express-session");

app.use(session({
    secret: "technoweb rocks",
    name: "mon_couki",
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/test' }), // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

/*
app.use('/api', api.default());
*/

// Démarre le serveur
app.on('close', () => {
});
exports.default = app;
