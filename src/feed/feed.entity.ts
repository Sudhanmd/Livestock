// feed.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Feed {
  @PrimaryGeneratedColumn('increment')
  feedId: number;

  @Column({unique:true})
  feedName: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column({ type: 'decimal', nullable: false })
  pricePerUnit: number;
}

