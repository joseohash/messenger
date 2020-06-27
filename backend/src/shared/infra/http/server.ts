import express from 'express';
import Http from 'http';
import io from 'socket.io';

const app = express();

const server = new Http.Server(app);

const socket = io(server);

socket.on('connection', () => console.log('alguem entrou'));

server.listen(3333, () => console.log('Server up on 3333'));
