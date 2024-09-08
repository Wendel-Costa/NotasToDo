import express from "express";
import NotaController from "../controllers/notaController.js";

const routes = express.Router();

routes.get("/notas", NotaController.listarNotas);
routes.get("/notas/:id", NotaController.listarNotaPorId);
routes.post("/notas", NotaController.criarNota);
routes.put("/notas/:id", NotaController.atualizarNota);
routes.delete("/notas/:id", NotaController.excluirNota);

export default routes;