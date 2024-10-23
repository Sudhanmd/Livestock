import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Livestock } from '../livestock/livestock.entity';
import { User } from 'src/user/user.entity';

@Entity()
export class Request {
  @PrimaryGeneratedColumn('increment')
  requestId: number;

  @Column({ nullable: false })
  requestType: string;

  @ManyToOne(() => User, (user) => user.userId, { nullable: true })
  userid: User;  // Foreign Key referencing the User entity

  @ManyToOne(() => Livestock, (livestock) => livestock.livestockId, { nullable: true })
  livestockid: Livestock;  // Foreign Key referencing the Livestock entity

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @Column({ nullable: false })
  status: string;

  @Column({ type: 'date', nullable: false })
  requestDate: Date;
}
