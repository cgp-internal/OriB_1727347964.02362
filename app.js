const express = require('express');
const app = express();
const { chatRouter } = require('./controllers/chat');

app.use(express.json());
app.use(express.static('public'));

app.use('/chat', chatRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});