import { getRepository } from 'typeorm';

import Cash from '../models/Cash';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  value: number;
}

class CreateCashService {
  public async execute({ user_id, value }: Request): Promise<Cash> {
    const cashesRepository = getRepository(Cash);
    const usersRepository = getRepository(User);

    const userExists = await usersRepository.findOne({ id: user_id });

    if (!userExists) {
      throw new AppError('User not found.', 401);
    }

    const cash = cashesRepository.create({
      user_id,
      value,
    });

    await cashesRepository.save(cash);

    return cash;
  }
}

export default CreateCashService;
