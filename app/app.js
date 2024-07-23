// const socket = io('ws://localhost:8080');
// Check if the hostname is localhost or a specific domain
const socketURL = window.location.hostname === 'localhost' ? 'ws://localhost:8080' : `wss://deploy-socketio-minimal-demo.onrender.com/`;
// const socketURL = 'wss://https://deploy-socketio-minimal-demo.onrender.com/';
const socket = io(socketURL);

socket.on('message', text => {

    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)

});

document.querySelector('button').onclick = () => {

    const text = document.querySelector('input').value;
    socket.emit('message', text)
    
}



// Regular Websockets

// const socket = new WebSocket('ws://localhost:8080');

// // Listen for messages
// socket.onmessage = ({ data }) => {
//     console.log('Message from server ', data);
// };

// document.querySelector('button').onclick = () => {
//     socket.send('hello');
// }
