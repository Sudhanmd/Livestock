// request.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { RequestService } from './request.service';
import { Request } from './request.entity';
import { RequestDto } from './request.dto';
import { Livestock } from 'src/livestock/livestock.entity';


@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  // POST method to create a new request record
  @Post('addRequest/:userid/:livestockid')
  async createRequest(
    @Body() body:RequestDto, 
    @Param('userid')userId:number,
    @Param('livestockid') livestockId: number
  ){
    return await this.requestService.createRequest(body,userId,livestockId);

  }

  // GET method to retrieve all request records
  @Get('getAllRequest')
  async getAllRequests(){
    return this.requestService.getAllRequests();
  }

  // GET method to retrieve a request record by ID
  @Get('getRequestByRequestId/:requestId')
  async getRequest(@Param('requestId') Id: number) {
    return this.requestService.getRequestById(Id);
  }

  // PUT method to update an existing request record
  @Put('updateRequestByRequestId/:requestId')
  async updateRequest(@Param('requestId') requestId: number, @Body() requestData: Request) {
    return this.requestService.updateRequest(requestId, requestData);
  }

  // DELETE method to remove a request record by ID
  @Delete('deleteRequestByRequestId/:requestId')
  async deleteRequest(@Param('requestId') requestId: number){
    return this.requestService.deleteRequest(requestId);
  }
}
