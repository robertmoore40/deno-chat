let ws;

window.addEventListener('DOMContentLoaded', () => {
    ws = new WebSocket('ws://localhost:3000/ws');
    ws.addEventListener('open', OnConnectionOpen);
    ws.addEventListener('open', onMessageReceived);
})

function OnConnectionOpen() {
    console.log('Connection Open');
}

function onMessageReceived(){
    console.log('New Message Received', event);
}