import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';

import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
// import { UserRepository } from './user.repository';
import { EntityRepository } from '@mikro-orm/postgresql';

@Injectable()
export class UserService {
  constructor(
    // @InjectRepository(UserEntity)
    // private readonly userRepository: UserRepository,
    @InjectRepository(UserEntity)
    private usersRepository: EntityRepository<UserEntity>,
  ) { }

  // constructor(
  //   @InjectRepository(User)
  //   private usersRepository: EntityRepository<User>,
  //   @Inject(AuditLogsService)
  //   private auditLog: AuditLogsService
  // ) 

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const email = createUserDto.email;
    const alreadyCreated = await this.usersRepository.findOne({ email });

    if (!alreadyCreated) {
      const user = new UserEntity(
        createUserDto.name,
        createUserDto.email,
        createUserDto.password,
        createUserDto.profile_image,
      );
      await this.usersRepository.persistAndFlush(user);

      return user;
    }
  }
}