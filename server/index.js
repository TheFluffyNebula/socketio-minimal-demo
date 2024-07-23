const server = require('http').createServer();
const io = require('socket.io')(server, {
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
// http.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
// Use the PORT environment variable if it exists, otherwise default to 8080
const PORT = process.env.PORT || 8080;
server.listen(PORT, '0.0.0.0', () => console.log(`listening on http://0.0.0.0:${PORT}`));


// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => { 

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });


 
