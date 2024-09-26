Chat Application README
========================

Introduction
------------

This is a real-time chat application built with Node.js, Express, and SQLite. The application allows users to send and receive messages in real-time using WebSocket connections.

How to Run
------------

1. Clone the repository to your local machine.
2. Open the terminal and navigate to the project directory.
3. Run the `run.sh` script to install Node.js, initialize a new project, install Express, and install SQLite.
4. Start the server by running `node app.js`.
5. Open a web browser and navigate to `http://localhost:3000` to access the chat interface.

Usage
-----

1. Enter your message in the input field and click the send button.
2. The message will be broadcast to all connected clients in real-time.

Project Structure
----------------

* `app.js`: Main entry point for the chat application.
* `controllers/chat.js`: Defines routes for chat functionality.
* `services/chatService.js`: Contains logic for handling WebSocket connections and broadcasting messages.
* `repositories/chatRepository.js`: Interfaces with the SQLite database to store and retrieve chat messages.
* `database.js`: Configures and initializes the SQLite database.
* `public/index.html`: HTML file that hosts the chat interface.
* `public/js/chat.js`: Client-side JavaScript that establishes a WebSocket connection.
* `README.md`: This file.
* `.gitignore`: Ignores node-modules and cache files.
* `run.sh`: Bash script to install Node.js, initialize a new project, install Express, and install SQLite.