import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log ("Conectado na database!");
})

const app = express();

app.get('/', (req,res) => {
    res.status(200).send("Página inicial");
})

export default app;