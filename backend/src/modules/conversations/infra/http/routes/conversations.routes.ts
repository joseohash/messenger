import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ConversationsController from '../controller/ConversationsController';

const conversationsRoute = Router();
const conversationsController = new ConversationsController();

conversationsRoute.use(ensureAuthenticated);

conversationsRoute.post('/', conversationsController.create);

export default conversationsRoute;
