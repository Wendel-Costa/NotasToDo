import mongoose from "mongoose";
import "dotenv/config"

async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_PASS);

    const conexao = mongoose.connection;

    conexao.on("error", (erro) => {
        console.error("erro de conexão", erro);
    })
    
    conexao.once("open", () => {
        console.log ("Conectado na database!");
    })
};

conectaNaDatabase();

export default mongoose;