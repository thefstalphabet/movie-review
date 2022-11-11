import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { EntityRepository } from '@mikro-orm/postgresql';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: EntityRepository<UserEntity>);
    create(createUserDto: CreateUserDto): Promise<UserEntity>;
}
