const app = require("./app");


app.listen(process.env.PORT, () => {
    console.log(`Serveur actif sur le port ${process.env.PORT}`);
})

