import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    cost: number;

    @Column({ name: 'date_created' })
    dateCreated: Date;
}