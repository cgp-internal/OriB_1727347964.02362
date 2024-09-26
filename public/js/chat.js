let socket = new WebSocket('ws://' + window.location.host);

document.addEventListener('DOMContentLoaded', () => {
  const messageInput = document.getElementById('message');
  const sendButton = document.getElementById('send');
  const chatLog = document.getElementById('chat-log');

  sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
      socket.send(message);
      messageInput.value = '';
    }
  });

  socket.addEventListener('message', (event) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = event.data;
    chatLog.appendChild(messageElement);
  });

  socket.addEventListener('open', () => {
    console.log('Connected to the WebSocket!');
  });

  socket.addEventListener('close', () => {
    console.log('Disconnected from the WebSocket!');
  });

  socket.addEventListener('error', (event) => {
    console.error('Error occurred:', event);
  });
});