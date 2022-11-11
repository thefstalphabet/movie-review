import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [MikroOrmModule.forRoot(), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
