// PROCESO PARA LEVANTAR UN SERVIDOR, Y UNIR LAS RUTAS: 
// Aqui lo que hacemos es requerir express y lo ejecutamos 
//para tener disponibles todos los metodos que vamos a precisar

const express = require("express");
const app = express();

// Aqui tenemos el modulo nativo para manejar las rutas de los archivos
const path = require("path");

// En esta parte usamos recursos estáticos.
app.use(express.static("public"));

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

// Ponemos a escuchar el servidor
app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor funcionando');
})

// Definimos las rutas a los distintos pedidos que nuestro sitio 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.get('/envios', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/envios.html"));
});
app.get('/pagos', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/pagos.html"));
});