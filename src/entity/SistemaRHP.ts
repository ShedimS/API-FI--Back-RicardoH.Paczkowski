import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SistemaRHP {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    produto: string

    @Column()
    setor: number

    @Column()
    quantidade: number

    @Column()
    valor: string


}
