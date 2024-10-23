import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  userId: number;

  @Column()
  userName: string;  

  @Column()
  password: string;  

  @Column()
  role: string;  

  @Column({unique:true})
  email: string; 

  @Column()
  mobileNumber: string; 

}
