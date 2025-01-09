import app from "./app.js";

const main = async () => {
  try {
    app.listen(3000, console.log("Servidor levantado en el puerto", 3000));
  } catch (error) {
    console.log("No se pudo conectar a la base de datos", error);
  }
};
main();

console.log("Hello, world!");
