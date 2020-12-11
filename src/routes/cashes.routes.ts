import { Router } from 'express';

import CreateCashService from '../services/CreateCashService';

const cashesRouter = Router();

cashesRouter.post('/', async (request, response) => {
  const { user_id, value } = request.body;

  const createCash = new CreateCashService();

  const cash = await createCash.execute({
    user_id,
    value,
  });

  return response.json(cash);
});

export default cashesRouter;
