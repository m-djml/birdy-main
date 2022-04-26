const app = require("./app.js");
const port = 27017;
app.default.listen(port, () => {
  console.log(`Serveur actif sur le port ${port}`);
});

const mongoose = require('mongoose');
mongoose
.connect('mongodb://localhost:27017/test', {
    dbName: 'yourDB-name',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('Mongo Error'));
