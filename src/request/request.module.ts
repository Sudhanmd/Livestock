import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './request.entity';
import { UsersModule } from 'src/user/user.module';
import { LivestockModule } from 'src/livestock/livestock.module';

@Module({
  imports: [TypeOrmModule.forFeature([Request]),UsersModule,LivestockModule],
  controllers: [RequestController],
  providers: [RequestService],
  exports:[RequestService]
})
export class RequestModule {}
