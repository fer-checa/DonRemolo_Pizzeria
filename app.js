const express = require("express");
const app = express();
const path = require("path"); // Aqui tenemos el modulo nativo para manejar las rutas de los archivos


app.use(express.static("public")); // En esta parte usamos recursos estáticos.

const publicFolderPath = path.resolve(__dirname ,'./public');
app.use( express.static(publicFolderPath) );

// Ponemos a escuchar el servidor
app.listen(3030, () => {
    console.log("Servidor corriendo en http://localhost:3030")
});