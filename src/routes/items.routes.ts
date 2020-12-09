import { Router } from 'express';

import CreateItemService from '../services/CreateItemService';
import ListItemService from '../services/ListItemService';

const itemsRouter = Router();

itemsRouter.get('/', async (request, response) => {
  const listItem = new ListItemService();

  const items = await listItem.execute();

  return response.json(items);
});

itemsRouter.post('/', async (request, response) => {
  const { image, title } = request.body;

  const createItem = new CreateItemService();

  const item = await createItem.execute({
    image,
    title,
  });

  return response.json(item);
});

export default itemsRouter;
