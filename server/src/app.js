var MongoStore = require('connect-mongo');
const MongoClient = require('mongodb').MongoClient;
const dburl = "mongodb://127.0.0.1:27017/test";
const client = new MongoClient(dburl);
const path = require('path');
const api = require('./api.js');
const assert = require('assert');

async function main() {
  await client.connect(dburl);
}
main().catch((err) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  client.close();
});


// Détermine le répertoire de base
const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

express = require('express');
const app = express()
api_1 = require("./api.js");
const session = require("express-session");



app.use('/api', api.default());

// Démarre le serveur
app.on('close', () => {
});
exports.default = app;
