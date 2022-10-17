import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User extends BaseEntity {
  @ApiProperty({
    description: 'Primary Key as user ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'user name',
    example: 'john Paul',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'The user Email Address',
    example: 'johnPaul@gmail.com',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: 'Hashed User Password',
  })
  @Column()
  password: string;

  @ApiProperty({
    description: 'When user was created',
  })
  @CreateDateColumn()
  createAt: Date;

  @ApiProperty({
    description: 'when user was updated',
  })
  @UpdateDateColumn()
  updateAt: Date;

  @BeforeInsert() //how to save the plain text password to harsh passwords in the database
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
