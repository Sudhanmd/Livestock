// livestock.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { LivestockService } from './livestock.service';
import { livestockDto, updatelivestockDto } from './livestock.dto';


@Controller('livestock')
export class LivestockController {
  constructor(private readonly livestockService: LivestockService) {}


  @Post('addLivestock')
  async createLivestock(@Body() body:livestockDto) {
    return await this.livestockService.createLivestock(body);
  }
  @Get('getAllLivestock')
  async getAllLivestock() {
    return this.livestockService.getAllLivestock();
  }


  @Get('getLivestockByLivestockId/:livestockId')
  async getLivestockByLivestockId(@Param('livestockId') livestockId: number) {
    return this.livestockService.getLivestockById(livestockId);
  }


  @Put('updateLivestockByLivestockId/:livestockId')
  async update(@Param('livestockId') livestockId: number, @Body()body:updatelivestockDto){
    return this.livestockService.updateLivestock(livestockId,body);
  }

  // DELETE method to remove a livestock record by ID
  @Delete('deleteLivestockByLivestockId/:livestockId')
  async deleteLivestock(@Param('livestockId') livestockId: number) {
   await this.livestockService.deleteLivestock(livestockId);
  return {success:true, message:"deleted successflly"}
  }
}
