import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item{
  @PrimaryGeneratedColumn()
  itemId: number;

  @Column()
  itemName: number;

  @Column()
  itemPrice: number;
 
  @Column()
  itemType: string;

  @Column()
  stock: number;

  @Column()
  itemCommand: string;
} 