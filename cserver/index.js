const app = require("./app");

const port = 5000;

app.default.listen(port, () => {
    console.log(`Serveur actif sur le port ${port}`);
})
