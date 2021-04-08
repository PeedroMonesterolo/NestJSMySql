import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    created_by: string;

    @Column()
    created_dt: Date;

    @Column()
    update_by: string;

    @Column()
    Update_dt: Date;
}