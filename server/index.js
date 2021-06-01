const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const router = require('./router')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router); //as a middleware

server.listen(PORT, () => console.log(`Server is connected to PORT: ${PORT}`)) //callback function ()=>console.log..

