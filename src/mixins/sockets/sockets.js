import socket from '@/sockets/socket';

const sockets = {
    methods: {
        listen() {
            socket.on('mensaje', (data)=>{
                this.showSuccessSwal('fino mi king')
            })
        },
        send() {
            socket.emit('saludo', 'hola servidor')
        }
    },
}

export default sockets