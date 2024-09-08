import express from "express";
import notas from "./notasRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Página Inicial NotasToDo"));
    app.use(express.json(), notas);
}

export default routes;