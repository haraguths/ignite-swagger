import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    if (!user_id) {
      throw new Error("ListAllUsersUseCase");
    }
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase, IRequest };
