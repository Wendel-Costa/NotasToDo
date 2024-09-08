import nota from "../models/Notas.js";

class NotaController {
    static async listarNotas (req,res) {
        try{
            const listaNotas = await nota.find({});
            res.status(200).json(listaNotas);
        } catch(erro){
            res.status(500).json(erro);
        }
    }
}

export default NotaController