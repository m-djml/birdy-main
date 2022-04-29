const mongoose = require("mongoose");
const uri = "mongodb+srv://" + process.env.MONGO_USER_PASS + "@birdy.6okxl.mongodb.net/birdy";

mongoose
  .connect(uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
