import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Reemplaza la URL con la dirección de tu servidor de sockets

export default socket;
