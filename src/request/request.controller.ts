// request.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { RequestService } from './request.service';
import { Request } from './request.entity';
import { requestDto } from './request.dto';


@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  // POST method to create a new request record
  @Post()
  async createRequest(@Body() body:requestDto){
    return await this.requestService.createRequest(body);

  }

  // GET method to retrieve all request records
  @Get()
  async getAllRequests(){
    return this.requestService.getAllRequests();
  }

  // GET method to retrieve a request record by ID
  @Get(':requestId')
  async getRequest(@Param('requestId') requestId: number) {
    return this.requestService.getRequestById(requestId);
  }

  // PUT method to update an existing request record
  @Put(':requestId')
  async updateRequest(@Param('requestId') requestId: number, @Body() requestData: Request) {
    return this.requestService.updateRequest(requestId, requestData);
  }

  // DELETE method to remove a request record by ID
  @Delete(':requestId')
  async deleteRequest(@Param('requestId') requestId: number){
    return this.requestService.deleteRequest(requestId);
  }
}
