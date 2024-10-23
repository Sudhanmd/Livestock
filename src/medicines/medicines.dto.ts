import{ IsNotEmpty, IsNumber,IsOptional,IsString } from "class-validator";

export class medicinesDto {

    @IsNotEmpty()
    @IsString()
    medicineName: string;

    @IsNotEmpty()
    @IsString()
    brand?: string;

    @IsNotEmpty()
    @IsString()
    category: string;

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
 
export class optionalmedicineDto{

    @IsNotEmpty()
    @IsOptional()
    quantity: number;

    @IsNotEmpty()
    @IsOptional()
    pricePerUnit: number;

}