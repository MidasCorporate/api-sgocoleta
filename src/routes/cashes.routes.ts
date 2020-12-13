import { Router } from 'express';

import CreateCashService from '../services/CreateCashService';
import ShowCashService from '../services/ShowCashService';

const cashesRouter = Router();

cashesRouter.get('/', async (request, response) => {
  const { user_id } = request.query;

  const showCash = new ShowCashService();

  const cash = await showCash.execute({
    user_id: String(user_id),
  });

  return response.json(cash);
});

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
