import * as net from 'net';

const server = net.createServer(); 
const host = "127.0.0.1";

server.listen(14001, host, () => { 
    console.log(`TCP Client listening on ${host}:14001`); 
}); 

server.on('connection', (socket) => { 
    var clientAddress = `${socket.remoteAddress}:${socket.remotePort}`; 
    console.log(`new client connected: ${clientAddress}`); 
    
   
    socket.on('data', (data) => {
        console.log(`Client ${clientAddress}: ${data}`); 
    });

    // Add a 'close' event handler to this instance of socket 
    socket.on('close', (data) => { 
        console.log(`connection closed: ${clientAddress}`); 
    });

    // Add a 'error' event handler to this instance of socket 
    socket.on('error', (err) => { 
        console.log(`Error occurred in ${clientAddress}: ${err.message}`); 
    });
})