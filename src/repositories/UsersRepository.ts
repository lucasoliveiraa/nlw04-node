import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository()
class UsersRepository extends Repository<User> {

}

export { UsersRepository };