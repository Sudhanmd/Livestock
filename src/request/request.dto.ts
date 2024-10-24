import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";


export class RequestDto{
    @IsString()
    @IsNotEmpty()
    requestType: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsString()
    @IsNotEmpty()
    status: string;

  @IsDateString()
  @IsNotEmpty()
  requestDate: Date;


}
 
export class OptinalrequesDto{

    @IsString()
    @IsOptional()
    status: string;

    @IsNumber()
    @IsOptional()
    quantity: number;

    @IsString()
    @IsOptional()
    requestType: string;
}



