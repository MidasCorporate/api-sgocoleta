import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';
import ShowUserService from '../services/ShowUserService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

usersRouter.get('/', ensureAuthenticated, async (request, response) => {
  console.log(request.user);

  const { user_id } = request.query;

  const showUser = new ShowUserService();

  const user = await showUser.execute({
    user_id: String(user_id),
  });

  return response.json(user);
});

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  // delete user.password;

  return response.json(user);
});

export default usersRouter;
