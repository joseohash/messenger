import Conversation from '../infra/typeorm/entities/Conversation';
import ICreateConversationDTO from '../dtos/ICreateConversationDTO';

export default interface IConversationsRepository {
  create(conversationData: ICreateConversationDTO): Promise<Conversation>;
  findByIds(
    user1_id: string,
    user2_id: string,
  ): Promise<Conversation | undefined>;
}
