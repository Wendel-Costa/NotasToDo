import express from "express";
import notas from "./notasRoutes.js";
import cors from "cors"

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Página Inicial NotasToDo"));
    app.use(cors(), express.json(), notas);
}

export default routes;