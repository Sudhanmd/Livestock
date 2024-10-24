// request.service.ts
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NumericType, Repository } from 'typeorm';
import { Request } from './request.entity';
import { OptinalrequesDto, RequestDto } from './request.dto';
import { UsersService } from 'src/user/user.service';
import { LivestockService } from 'src/livestock/livestock.service';


@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
    private readonly userSevices:UsersService,
    private readonly livestockServices:LivestockService
  ) {}

  // Method to create a new request record
  async createRequest(
    request:RequestDto,
    userId : number,
    livestockId: number
  ) {
    const user =  await this.userSevices.getOne(userId);
    const livestock = await this. livestockServices.getLivestockById(livestockId)
   
    request['userid']=user;
    request['livestockid']= livestock;
    const req =  await this.requestRepository.save(request);
    return req;
    
  }

  // Method to retrieve all request records
  async getAllRequests(){
    return await this.requestRepository.find({relations:['userid','livestockid']});
  }

  // Method to retrieve a request record by ID
  async getRequestById(id: number) {

    try {
      
      const request = await this.requestRepository.findOne
    ({
       where: { requestId :id }, 
        relations: ['userid', 'livestockid'] 
    });
    // return 'df'
    if (!request) {
      return {message:` The requested id - ${id} is not found`}
    }
    return request;
    } 
    catch (error) {
      throw new BadRequestException(`ffdd`)
    }
    
  }

  // Method to update an existing request record
  async updateRequest(requestId: number, requestData:OptinalrequesDto) {
   try {
    const checkrequest = await this.requestRepository.findOne({where:{requestId}})
    if(!checkrequest){
      throw new NotFoundException(`given id ${requestId} is not found`)
    }
    const request = await this.requestRepository.update(requestId,requestData)
    return{success:true,message:request}
   } catch (error) {
    throw new BadRequestException(error.message || error)
   }
  }


  async deleteRequest(requestId: number){
    const result = await this.requestRepository.delete(requestId);
    if (result.affected === 0) {
      throw new NotFoundException(`Request with ID ${requestId} not found`);
    }
    return{ message:'successfully deleted'}
  }
}
