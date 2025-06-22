const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });
wss.on('connection', ws => {
  ws.on('message', msg => {
    wss.clients.forEach(c => { if (c !== ws && c.readyState === WebSocket.OPEN) c.send(msg); });
  });
});
console.log("WebSocket server running");
