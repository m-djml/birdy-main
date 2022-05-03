const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require("./routes/user_routes");
const messageRoutes = require('./routes/message_routes');
const { checkUser, first_auth } = require('./middleware/auth_middleware.js');
require('dotenv').config({path: './config/.env'});
require('./config/db.js')
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    // allowedHeaders: ['sessionId', 'Content-Type'],
    // exposedHeaders: ['sessionId'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // preflightContinue: false
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get('*', checkUser);
app.get('/auth', first_auth, (req, res) => {
    res.status(200).send(res.locals.user._id);
})

app.use('/api/user', userRoutes);
app.use('/api/message', messageRoutes);

//Démarre le serveur
app.on('close', () => {
});

module.exports = app;