// request.service.ts
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from './request.entity';
import { updatefeedDto } from 'src/feed/feed.dto';
import { optinalrequesDto } from './request.dto';


@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
  ) {}

  // Method to create a new request record
  async createRequest(request:updatefeedDto) {
    return await this.requestRepository.save(request);
  }

  // Method to retrieve all request records
  async getAllRequests(){
    return await this.requestRepository.find({relations:['userid','livestockid']});
  }

  // Method to retrieve a request record by ID
  async getRequestById(requestId: number) {
    const request = await this.requestRepository.findOne({ where: { requestId: requestId }, relations: ['user', 'livestock'] });
    if (!request) {
      return {message:'not found'}
    }
    return request;
  }

  // Method to update an existing request record
  async updateRequest(requestId: number, requestData:optinalrequesDto) {
   try {
    const checkrequest = await this.requestRepository.findOne({where:{requestId}})
    if(!checkrequest){
      throw new NotFoundException(`given id ${requestId} is not found`)
    }
    const request = await this.requestRepository.update(requestId,requestData)
    return{suc:true,mes:request}
   } catch (error) {
    throw new BadRequestException(error.message || error)
   }
  }


  async deleteRequest(requestId: number){
    const result = await this.requestRepository.delete(requestId);
    if (result.affected === 0) {
      throw new NotFoundException(`Request with ID ${requestId} not found`);
    }
    return result;
  }
}
