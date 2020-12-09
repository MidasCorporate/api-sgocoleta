import { getRepository } from 'typeorm';

import Point from '../models/Point';

// interface Response {
//   title: string;
//   image_url: string;
// }

class ListPointService {
  public async execute(): Promise<Point[]> {
    const itemsRepository = getRepository(Point);

    const points = await itemsRepository.find();

    return points;
  }
}

export default ListPointService;
