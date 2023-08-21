import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 定义数据库user表中User实体
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  time: string;
}
