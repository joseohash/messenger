import { getRepository, Repository } from 'typeorm';

import IConversationsRepository from '@modules/conversations/repositories/IConversationsRepository';
import ICreateConversationDTO from '@modules/conversations/dtos/ICreateConversationDTO';
import Conversation from '../entities/Conversation';

class ConversationsRepository implements IConversationsRepository {
  private ormRepository: Repository<Conversation>;

  constructor() {
    this.ormRepository = getRepository(Conversation);
  }

  public async create({
    user1_id,
    user2_id,
  }: ICreateConversationDTO): Promise<Conversation> {
    const conversation = this.ormRepository.create({ user1_id, user2_id });

    await this.ormRepository.save(conversation);

    return conversation;
  }
}

export default ConversationsRepository;
