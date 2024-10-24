import { IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreatefeedDto{

  @IsNotEmpty()
  @IsString()
  feedName: string;

  @IsNotEmpty()
  @IsString()
  type :string;

  @IsNotEmpty()
   @IsString()
   description: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  pricePerUnit: number;
}


export class UpdatefeedDto {
  
  @IsNumber()
  @IsOptional()
  feedId ?:number;

  @IsString()
  @IsOptional()
  feedName?:string;

  @IsString()
  @IsOptional()
  type ?:string;

 
  @IsNumber()
  @IsOptional()
  quantity ?: number;

  @IsString()
  @IsOptional()
  description?: string;

    @IsPhoneNumber()
    @IsOptional()
    pricePerUnit?: number;
}
