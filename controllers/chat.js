const express = require('express');
const { setupWebSocket } = require('./services/chatService');

const app = express();

const chatRouter = express.Router();

chatRouter.get('/messages', (req, res) => {
  res.send([]);
});

app.use('/chat', chatRouter);

setupWebSocket(app);

module.exports = { chatRouter };