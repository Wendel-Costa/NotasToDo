import express from "express";
import NotaController from "../controllers/notaController.js";

const routes = express.Router();

routes.get("/notas", NotaController.listarNotas);
routes.post("/notas", NotaController.criarNota);

export default routes;