import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { LivestockModule } from './livestock/livestock.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './feed/feed.module';
import { MedicinalModule } from './medicines/medicines.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root@123',
      database: 'postgres',
      autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    LivestockModule,
    FeedModule,
    MedicinalModule

  ],controllers:[],providers:[]
})
export class AppModule {}
