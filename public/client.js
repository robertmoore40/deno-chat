let ws;

window.addEventListener('DOMContentLoaded', () => {
    ws = new WebSocket('ws://localhost:3000/ws');
    ws.addEventListener('open', OnConnectionOpen);
    ws.addEventListener('open', onMessageReceived);

    
})



function OnConnectionOpen() {

    const queryParams = getQueryParams()
    if(!queryParams.name || !queryParams.group)
        window.location.href = 'chat.html';
    console.log(queryParams);


    ws.send()

    console.log('Connection Open');
    
    const event = {
        event: 'join',
        groupName: queryParams.group,
        name: queryParams.name
    }
    
    ws.send(event);

}

function onMessageReceived(){
    console.log('New Message Received', event);
}

function getQueryParams(){
    const search = window.location.search.substring(1);
    const pairs = search.split('&');
    const params = {};
    for (const pair of pairs) {
        const parts = pair.split('=');
        params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }
}