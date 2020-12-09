// import { getRepository } from 'typeorm';

// import PointItem from '../models/PointItem';

// interface Request {
//   point_id: string;
//   item_id: string;
// }

// class CreatePointService {
//   public async execute({ item_id, point_id }: Request): Promise<PointItem> {
//     const pointItemsRepository = getRepository(PointItem);

//     console.log(point_id, item_id);

//     const pointItem = pointItemsRepository.create({
//       item_id,
//       point_id,
//     });

//     await pointItemsRepository.save(pointItem);

//     return pointItem;
//   }
// }

// export default CreatePointService;
