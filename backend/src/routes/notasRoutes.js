import express from "express";
import NotaController from "../controllers/notaController.js";

const routes = express.Router();

routes.get("/notas", NotaController.listarNotas);

export default routes;