const { saveMessage, getMessages } = require('./repositories/chatRepository');

let clients = [];

const sendMessage = (message) => {
  clients.forEach((client) => {
    client.send(JSON.stringify({ type: 'message', data: message }));
  });
};

const broadcastMessage = (message) => {
  sendMessage(message);
  saveMessage(message, () => {});
};

const setupWebSocket = (server) => {
  const wss = require('ws').createServer({ server });

  wss.on('connection', (ws) => {
    clients.push(ws);
    console.log('Client connected');

    ws.on('message', (message) => {
      broadcastMessage(message);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
      clients = clients.filter((client) => client !== ws);
    });
  });
};

module.exports = {
  sendMessage,
  broadcastMessage,
  setupWebSocket,
};