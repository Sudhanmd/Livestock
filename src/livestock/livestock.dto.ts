import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class LivestockDto{
    @IsNumber()
    @IsNotEmpty()
    livestockId:number;

    @IsNumber()
    @IsNotEmpty()
    age: number; 

    @IsString()
    @IsNotEmpty()
    name: string; 

    @IsString()
    @IsNotEmpty()
    species: string; 

    @IsString()
    @IsNotEmpty()
    breed: string; 

    @IsString()
    @IsNotEmpty()
    healthcodition: string; 
    
    @IsString()
    @IsNotEmpty()
    location: string;
    
    @IsEnum(['vaccinated', 'pending vaccination', 'not vaccinated'],{message:'valid role required. vaccinated | pending vaccination | not vaccinated' })
    VacinationStatus ?:  'vaccinated' | 'pending vaccination' | 'not vaccinated'; 

}

export class UpdatelivestockDto {

    @IsNumber()
    @IsOptional()
    age?: number;
    
    @IsString()
    @IsOptional()
    healthcodition?: string;

    @IsEnum(['vaccinated', 'pending vaccination', 'not vaccinated'],{message:'valid role required. vaccinated | pending vaccination | not vaccinated' })
    @IsOptional()
    VacinationStatus? : 'vaccinated' | 'pending vaccination' | 'not vaccinated'; 


    

}