var MongoStore = require('connect-mongo');
var MongoClient = require('mongodb').MongoClient;
const dburl = "mongodb://127.0.0.1:27017/test";
const client = new MongoClient(dburl);
const path = require('path');
const api = require('./api.js');

async function main() {
  await MongoClient.connect(dburl);
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
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/test' }), // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use('/api', api.default());

// Démarre le serveur
app.on('close', () => {
});
exports.default = app;
