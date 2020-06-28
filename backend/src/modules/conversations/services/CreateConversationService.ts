import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IConversationsRepository from '../repositories/IConversationsRepository';
import Conversation from '../infra/typeorm/entities/Conversation';

interface IRequest {
  user1_id: string;
  user2_id: string;
}

@injectable()
class CreateConversationService {
  constructor(
    @inject('ConversationsRepository')
    private conversationsRepository: IConversationsRepository,
  ) {}

  public async execute({
    user1_id,
    user2_id,
  }: IRequest): Promise<Conversation> {
    const foundConversation = await this.conversationsRepository.findByIds(
      user1_id,
      user2_id,
    );

    if (!foundConversation) {
      const conversation = await this.conversationsRepository.create({
        user1_id,
        user2_id,
      });

      return conversation;
    }

    return foundConversation;
  }
}

export default CreateConversationService;
