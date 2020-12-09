import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Point from './Point';
import Item from './Item';

@Entity('point_items')
class PointItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  point_id: string;

  @OneToMany(() => Point, point => point.point_item)
  @JoinColumn({ name: 'point_id' })
  point: Point;

  @Column()
  item_id: string;

  @ManyToOne(() => Item, item => item.item_point)
  @JoinColumn({ name: 'item_id' })
  item: Item;

  created_at: Date;

  updated_at: Date;
}

export default PointItem;
