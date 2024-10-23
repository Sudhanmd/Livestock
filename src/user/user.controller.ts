import { 
  Controller, 
  Get, Param, Post, Body, Put, Delete} from '@nestjs/common';
import { UsersService } from './user.service';
import { Userdto, updateuserDto } from './user.dto';



@Controller('users')
export class UsersController {
  constructor(private readonly usermodel: UsersService) {}

  @Post()
  async createUser(@Body() body : Userdto ){
    return await this.usermodel.createUser(body);
  }

  // Get all users (GET)
  @Get()
  async getAllUsers() {
    return await this.usermodel.getAllUser()
  }

  // Get a user by ID (GET)
  @Get(':Id')
  async getone(@Param('Id') userId: number) {
  return await this.usermodel.getOne(userId);
  }

  @Put(':userId')
  async update(@Param('userId') userId: number, @Body()users:updateuserDto) {
    return await this.usermodel.updateuser(userId,users);
  }

  // Delete a user by ID (DELETE)
  @Delete(':userId')
  async deleteUser(@Param('userId') id: number) {
   await this.usermodel.deleteUser(id);
   
  }
}
