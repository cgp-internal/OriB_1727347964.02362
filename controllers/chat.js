const express = require('express');
const { setupWebSocket } = require('./services/chatService');

const chatRouter = express.Router();

chatRouter.get('/messages', (req, res) => {
  res.send([]);
});

module.exports = chatRouter;