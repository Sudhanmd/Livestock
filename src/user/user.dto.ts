import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class Userdto{

  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  password :string;

  @IsNotEmpty()
  @IsEnum(['owner','suplier'],{message:'valid role required. owner| suplier' })
  role:'owner'|'suplier';

  @IsNotEmpty()
  @IsEmail()
  email :string;

  @IsNotEmpty()
  @IsPhoneNumber()
  mobileNumber :string;

}


export class updateuserDto {

    @IsString()
    @IsOptional()
    userName?: string;


    @IsPhoneNumber()
    @IsOptional()
    mobileNumber?: string;
}
