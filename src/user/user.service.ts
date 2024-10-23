import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Userdto, updateuserDto } from './user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {} 


// creating the user 1st it check if the email is exist means it throws error (this way we minimize the duplicate users) else create the new user.
  async createUser(userDto: Userdto) 
  {
    try {
     const checkuser = await this.userRepository.findOne({ where:{email:userDto.email}})
// check if the user given email is compared with the userDto
     if(checkuser)
      {
        throw new BadRequestException ("Use different Email");
      }
      const createuser = await this.userRepository.save(userDto)
          return{success:true, message:createuser}
        }
    catch (error) {
      throw new BadRequestException(error.message || error)
    }
           
  }
  

// getting all the users by using the route
async getAllUser(){
      return await this.userRepository.find();
  }

// getting the specific user details by userId
async getOne(id:number ){
  const byuserid = await this.userRepository.findOneBy({userId:id});

// if the userid is not exist means it throws notfoundexception
    if(!byuserid){
      throw new NotFoundException(`Given userID ${id} is not found`);
    }

// if the user is exist means it returns the user by userId
    return byuserid;
}


  async updateuser(userId: number,_userupdate :updateuserDto) {
    
    try {
      console.info(_userupdate);
      const up = await this.userRepository.findOne({where : {userId}});
       if(!up){
        throw new NotFoundException(`given id ${userId} is not found`)
       }
       const userupdatee = await this.userRepository.update(up,_userupdate)
     return {success:true,message:userupdatee}
    }
    catch (error) {
      throw new BadRequestException(error.message || error)
    }
}

async deleteUser(id:number){
      const deleteUser = await this.userRepository.delete(id)
          if(deleteUser.affected === 0){
            throw new NotFoundException (`userid ${id} is not found`);   
          }

        return {deleteUser, message:`${id} is deleted successfully`};
        }
}
