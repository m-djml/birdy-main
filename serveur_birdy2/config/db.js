const mongoose = require("mongoose");
const uri = "mongodb+srv://birdy:8vGruuaHqbprpHJ1@birdy.6okxl.mongodb.net/birdy";

mongoose
  .connect(uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

//server mdp = 8vGruuaHqbprpHJ1
//mongouri = 'mongodb+srv://birdy:8vGruuaHqbprpHJ1@birdy.6okxl.mongodb.net/test'