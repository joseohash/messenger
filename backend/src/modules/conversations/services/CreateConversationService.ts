import { inject, injectable } from 'tsyringe';
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
    const conversation = await this.conversationsRepository.create({
      user1_id,
      user2_id,
    });

    return conversation;
  }
}

export default CreateConversationService;
