import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IConversationsRepository from '@modules/conversations/repositories/IConversationsRepository';
import ConversationsRepository from '@modules/conversations/infra/typeorm/repositories/ConversationsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IConversationsRepository>(
  'ConversationsRepository',
  ConversationsRepository,
);
