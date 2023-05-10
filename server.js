const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // Reemplaza con el origen de tu aplicación Vue
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


const server = http.createServer(app);
const io = socketIO(server);
// Configurar el middleware de CORS


// Aquí puedes agregar tu configuración de servidor Express existente

// Manejo de conexiones de sockets
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Aquí puedes agregar tus eventos y lógica de manejo de sockets
});

// Inicia el servidor
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
