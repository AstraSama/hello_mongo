const express = require("express");
const app = express();
const port = 3000;

const pet_router = ("./Routers/pet_router.js")

app.use(express.json());
app.use("/pet", pet_router);

app.listen(port, () => console.log("Servidor conectado com sucesso"));