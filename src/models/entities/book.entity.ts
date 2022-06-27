import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Books')
export class Book {
  @PrimaryGeneratedColumn({})
  public readonly id: number;

  @Column({ type: 'varchar', length: 80 })
  public title: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  public description: string;

  // TODO: Fazer o tratamento de imagens
  // @Column({ type: 'varchar', nullable: true })
  // public image: string;

  @Column({ type: 'varchar', length: 30, unique: true })
  public ISBN: string;

  @Column({ type: 'int', nullable: true })
  public publisherId: number;

  @Column({ type: 'int' })
  public releaseYear: number;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;
}
