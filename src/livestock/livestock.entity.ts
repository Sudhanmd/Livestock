// livestock.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Livestock {
  @PrimaryGeneratedColumn('increment')
  livestockId: number; 

  @Column()
  name: string; 

  @Column()
  species: string;

  @Column()
  age: number; 
  @Column()
  breed: string;

  @Column()
  healthCondition?: string; 

  @Column()
  location: string; 

  @Column({
    type: 'enum',
    enum: ['vaccinated', 'pending vaccination', 'not vaccinated'],
    nullable: true,
  })
  vaccinationStatus?: 'vaccinated' | 'pending vaccination' | 'not vaccinated'; // Optional

}
