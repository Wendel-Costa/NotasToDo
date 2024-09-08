import mongoose from "mongoose";

const notasSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    categoria: {type: String},
    dataCriacao: {type: String},
    texto: {type: String, required: true}
}, {versionKey: false})

const nota = mongoose.model("NotasToDo", notasSchema);

export default nota;