const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    });
});

// http.listen(8080, () => console.log('listening on http://localhost:8080') );
// Use the PORT environment variable if it exists, otherwise default to 8080
const PORT = process.env.PORT || 8080;
http.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => { 

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });


 
