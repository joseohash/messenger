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

  public async findByIds(
    user1_id: string,
    user2_id: string,
  ): Promise<Conversation | undefined> {
    const conversation = await this.ormRepository.findOne({
      where: [
        { user1_id, user2_id },
        { user1_id: user2_id, user2_id: user1_id },
      ],
    });

    return conversation;
  }
}

export default ConversationsRepository;
