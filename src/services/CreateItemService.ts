import { getRepository } from 'typeorm';

import Item from '../models/Item';
import AppError from '../errors/AppError';

interface Request {
  image: string;
  title: string;
}

class CreateItemService {
  public async execute({ image, title }: Request): Promise<Item> {
    const itemsRepository = getRepository(Item);

    const checkItemExists = await itemsRepository.findOne({
      where: { title },
    });

    if (checkItemExists) {
      throw new AppError('Item already existing.');
    }

    const item = itemsRepository.create({
      image,
      title,
    });

    await itemsRepository.save(item);

    return item;
  }
}

export default CreateItemService;
