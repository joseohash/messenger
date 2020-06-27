import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';
import 'express-async-errors';

import Http from 'http';
import io from 'socket.io';
import AppError from '@shared/errors/AppError';

import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(express.json());
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

const server = new Http.Server(app);

const ioSocket = io(server);

ioSocket.on('connection', socket => {
  socket.on('chat message', () => {
    console.log(socket.id);
  });
});

// eslint-disable-next-line no-console
server.listen(3333, () => console.log('Server up on 3333'));
