import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Livestock } from '../livestock/livestock.entity';
import { User } from 'src/user/user.entity';


@Entity()
export class Request {
  @PrimaryGeneratedColumn('increment')
  requestId: number;

  @Column()
  requestType: string;

  @ManyToOne(() => User, (user) => user.userId)
  userid: User;  // Foreign Key referencing the User entity

  @ManyToOne(() => Livestock, (livestock) => livestock.livestockId)
  livestockid: Livestock;  // Foreign Key referencing the Livestock entity

  @Column()
  quantity: number;

  @Column()
  status: string;

  @Column({ type: 'date'})
  requestDate: Date;
}
