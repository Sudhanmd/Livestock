// medicine.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Medicine {
  @PrimaryGeneratedColumn('increment')
  medicineId: number;

  @Column()
  medicineName: string;

  @Column()
  brand?: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column({ type: 'decimal', nullable: false })
  pricePerUnit: number;

}

