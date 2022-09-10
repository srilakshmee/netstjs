import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Workshop } from './workshop.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  createdAt: string;

  @OneToMany(type => Workshop, ws => ws.event)
  workshops: Workshop[];
}
