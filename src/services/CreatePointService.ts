import { getRepository } from 'typeorm';

import Point from '../models/Point';
import AppError from '../errors/AppError';

interface Request {
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  uf: string;
  city: string;
}

class CreatePointService {
  public async execute({
    image,
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    uf,
    city,
  }: Request): Promise<Point> {
    const pointsRepository = getRepository(Point);

    const checkPointExists = await pointsRepository.findOne({
      where: { email },
    });

    if (checkPointExists) {
      throw new AppError('Point already existing.');
    }

    const point = pointsRepository.create({
      image,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      uf,
      city,
    });

    await pointsRepository.save(point);

    return point;
  }
}

export default CreatePointService;
