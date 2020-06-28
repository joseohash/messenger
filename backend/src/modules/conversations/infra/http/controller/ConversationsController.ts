import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateConversationService from '../../../services/CreateConversationService';

class ConversationsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { user2_id } = req.body;
    const user1_id = req.user.id;

    const createConversationService = container.resolve(
      CreateConversationService,
    );

    const conversation = await createConversationService.execute({
      user1_id,
      user2_id,
    });

    return res.json(conversation);
  }
}

export default ConversationsController;
