const express = require('express');
const mongoose = require('mongoose');
require('./config/db.js')
const cors = require('cors');
const app = express();

const port = 5000;

app.use(cors);
app.use(express.json());

app.listen(port, () => {
    console.log(`Serveur actif sur le port ${port}`);
})

//server mdp = 8vGruuaHqbprpHJ1
//mongouri = 'mongodb+srv://birdy:8vGruuaHqbprpHJ1@birdy.6okxl.mongodb.net/test'