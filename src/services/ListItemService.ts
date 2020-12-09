import { getRepository } from 'typeorm';

import Item from '../models/Item';

interface Response {
  title: string;
  image_url: string;
}

class ListItemService {
  public async execute(): Promise<Response[]> {
    const itemsRepository = getRepository(Item);

    const items = await itemsRepository.find();

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });

    return serializedItems;
  }
}

export default ListItemService;
