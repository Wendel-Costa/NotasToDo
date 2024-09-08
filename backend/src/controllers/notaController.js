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

    static async criarNota (req,res) {
        try{
            const notaCriada = new nota(req.body)
            const novaNota = await notaCriada.save();
            res.status(200).json(novaNota);
        } catch(erro){
            res.status(500).json(erro);
        }
    }
}

export default NotaController