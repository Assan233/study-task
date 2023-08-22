import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 定义数据库user表中User实体
 * 注意：实体类名必须要和 数据库-表名一致，因为 typeorm 会将 实例类名.toLowerCase() 作为表名访问数据。
 */
@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'user_id' })
  user_id: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'int', name: 'age' })
  age: number;

  @Column({ type: 'varchar', name: 'sex' })
  sex: string;

  @Column({ type: 'varchar', name: 'address' })
  address: string;
}
