import { getRepository } from 'typeorm';

import Cash from '../models/Cash';
import AppError from '../errors/AppError';

interface Request {
  user_id: string;
}

class ShowCashService {
  public async execute({ user_id }: Request): Promise<Cash[]> {
    const cashesRepository = getRepository(Cash);

    const cash = await cashesRepository.find({
      where: { user_id },
    });

    if (!cash) {
      throw new AppError('Cash not found.', 401);
    }

    return cash;
  }
}

export default ShowCashService;
