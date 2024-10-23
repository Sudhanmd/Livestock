import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicineController } from './medicines.controller';
import { Medicine } from './medicines.entity';
import { MedicineService } from './medicines.service';


@Module({
  imports: [TypeOrmModule.forFeature([Medicine])], 
  controllers: [MedicineController],
  providers: [MedicineService]
})
export class MedicinalModule {}