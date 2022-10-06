import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserRHP {

    @PrimaryGeneratedColumn()
    cod: number

    @Column()
    usuario: string  

    @Column()
    privilegio: string 


}