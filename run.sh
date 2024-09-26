#!/bin/bash

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs

# Initialize a new Node.js project
npm init -y

# Install Express.js
npm install express

# Install SQLite
apt-get install -y sqlite3

# Create a new database file
touch chat.db

echo "Installation complete. Run 'node app.js' to start the server."