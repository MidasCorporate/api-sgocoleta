import { Router } from 'express';
import { getRepository } from 'typeorm';

import PointItem from '../models/PointItem';

// import CreatePointItemService from '../services/CreatePointItemService';
import CreatePointService from '../services/CreatePointService';
import ListPointService from '../services/ListPointService';

const pointsRouter = Router();

pointsRouter.get('/', async (request, response) => {
  const listPoint = new ListPointService();

  const points = await listPoint.execute();

  return response.json(points);
});

pointsRouter.post('/', async (request, response) => {
  const {
    image,
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    uf,
    city,
    items,
  } = request.body;

  const createPoint = new CreatePointService();
  const pointItemsRepository = getRepository(PointItem);
  // const createPointItem = new CreatePointItemService();

  const point = await createPoint.execute({
    image,
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    uf,
    city,
  });

  const pointItems = items.map((item_id: string) => {
    return {
      item_id,
      point_id: point.id,
    };
  });

  const pointItem = pointItemsRepository.create(pointItems);

  await pointItemsRepository.save(pointItem);

  return response.json(point);
});

export default pointsRouter;
