const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require("./routes/user_routes");
const messageRoutes = require("./routes/message_routes");
const { checkUser } = require('./middleware/auth_middleware.js');
require('dotenv').config({path: './config/.env'});
require('./config/db.js')
const cors = require('cors');

const app = express();

//app.use(cors);
app.use(express.json());
app.use(cookieParser());

app.get('*', checkUser);

app.use('/api/user', userRoutes);
app.use('/api/message', messageRoutes);

// Démarre le serveur
// app.on('close', () => {
// });

module.exports = app;
