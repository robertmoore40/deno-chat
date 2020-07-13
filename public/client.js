let ws;

window.addEventListener('DOMContentLoaded', () => {
    ws = new WebSocket('ws://localhost:3000/ws');
    ws.addEventListener('open', OnConnectionOpen);
    ws.addEventListener('open', onMessageReceived);

    const queryParams = getQueryParams()


})



function OnConnectionOpen() {
    console.log('Connection Open');
}

function onMessageReceived(){
    console.log('New Message Received', event);
}

function getQueryParams(){
    const search = window.location.search.substring(1);
    const pairs = search.split('&');
    for (const pair of pairs) {
        const parts = pair.split('=');

    }
}