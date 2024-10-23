// medicine.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Medicine {
  @PrimaryGeneratedColumn('increment')
  medicineId: number;

  @Column()
  medicineName: string;

  @Column({ nullable: true })
  brand?: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  pricePerUnit: number;

}
