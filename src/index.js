import mongoose from "mongoose";
import app from "./app.js";

//const URIDB = "mongodb://root:root@localhost:27017/corfo_db?authSource=admin";

const URIDB = "mongodb+srv://root:root@cluster0.g1zog.mongodb.net/corfo_db?retryWrites=true&w=majority&appName=Cluster0"

const main = async () => {
  try {

    await mongoose.connect(URIDB);
    console.log("DB Conectada");
    app.listen(3000, console.log("Servidor levantado en el puerto", 3000));
  } catch (error) {
    console.log("No se pudo conectar a la base de datos\n", error);
  }
};
main();

//console.log("Hello, world!");
