const path = require('path');
const api = require('./api.js');

// Détermine le répertoire de base
const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

express = require('express');
const app = express()
api_1 = require("./api.js");
const session = require("express-session");

app.use(session({
    secret: "technoweb rocks",
    resave: true,
    saveUninitialized: true
}));

app.use('/api', api.default.use());

// Démarre le serveur
app.on('close', () => {
});
exports.default = app;
