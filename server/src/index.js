const app = require("./app.js");
const port = 27017;

const mongoose = require('mongoose');
const cors = require("cors");

mongoose
.connect("mongodb://localhost:27017/test", {
    /*dbName: 'yourDB-name',*/
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('Mongo Error'));

app.default.use(cors());

app.default.listen(port, () => {
  console.log(`Serveur actif sur le port ${port}`);
});
