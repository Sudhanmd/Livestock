// medicine.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { medicinesDto } from './medicines.dto';
import { Medicine } from './medicines.entity';
import { MedicineService } from './medicines.service';


@Controller('medicines')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  // POST method to create a new medicine record
  @Post('addMedicine')
  async createMedicine(@Body() body:medicinesDto) {
    return await this.medicineService.createMedicine(body );
  }

  // GET method to retrieve all medicine records
  @Get('getAllMedicines')
  async getAllMedicines(){
    return this.medicineService.getAllMedicines();
  }

  // GET method to retrieve a medicine record by ID
  @Get('getMedicineByMedicineId/:medicineId')
  async getMedicine(@Param('medicineId') medicineId: number) {
    return this.medicineService.getMedicineById(medicineId);
  }

  // PUT method to update an existing medicine record
  @Put('updateMedicineByMedicineId/:medicineId')
  async updateMedicine(@Param('medicineId') medicineId: number, @Body() medicineEntity: Medicine){
    return this.medicineService.updateMedicine(medicineId, medicineEntity);
  }

  // DELETE method to remove a medicine record by ID
  @Delete('deleteMedicineByMedicineId/:medicineId')
  async deleteMedicine(@Param('medicineId') medicineId: number) {
    return this.medicineService.deleteMedicine(medicineId);
  }
}




