import { Module } from '@nestjs/common';
import { LivestockController } from './livestock.controller';
import { LivestockService } from './livestock.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livestock } from './livestock.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Livestock])],
    controllers:[LivestockController],
    providers:[LivestockService],
    exports:[LivestockService]
    
})
export class LivestockModule {
    
}
