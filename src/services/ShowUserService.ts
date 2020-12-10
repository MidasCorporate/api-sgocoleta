import { getRepository } from 'typeorm';

import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  user_id: string;
}

class ShowUserService {
  public async execute({ user_id }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { id: user_id },
    });

    if (!user) {
      throw new AppError('User not found.', 401);
    }

    return user;
  }
}

export default ShowUserService;
