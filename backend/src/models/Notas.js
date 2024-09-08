import mongoose from "mongoose";

const nota = mongoose.model('notas',{
    categoria: String,
    dataCriacao: String,
    texto: String
})


/*
const notasSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    categoria: {type: String},
    dataCriacao: {type: String},
    texto: {type: String, required: true}
}, {versionKey: false})

const nota = mongoose.model("notas", notasSchema);
*/
export default nota;