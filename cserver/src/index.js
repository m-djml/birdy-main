const app = require("./app.js");

// start
const PORT = 4000;
app.default.listen(PORT, () => {
  console.log(`Serveur actif sur le port ${PORT}`);
});
