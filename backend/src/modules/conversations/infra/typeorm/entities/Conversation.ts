import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
} from 'typeorm';

@Entity('conversations')
class Conversation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user1_id: string;

  @Column()
  user2_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Conversation;
