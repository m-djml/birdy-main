const express = require('express');
require('./config/db.js')
const cors = require('cors');
const app = express();

app.use(cors);
app.use(express.json());

// Démarre le serveur
app.on('close', () => {
});

exports.default = app;