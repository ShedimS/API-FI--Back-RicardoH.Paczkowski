import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { SistemaRHP } from "./entity/SistemaRHP"
import { UserRHP } from "./entity/UserRHP"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new SistemaRHPs for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaRHP, {
            produto: "Arroz Tiu Juquinha",
            setor: 255,
            quantidade: 80,
            valor: "R$ 54,01"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaRHP, {
            produto: "Feijão Só Caruncho",
            setor: 387,
            quantidade: 24,
            valor: "R$ 4,01"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaRHP, {
            produto: "Trigo Entrigado",
            setor: 245,
            quantidade: 14,
            valor: "R$ 5,01"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaRHP, {
            produto: "Fuba só no fu",
            setor: 5,
            quantidade: 40,
            valor: "R$ 1,01"
        })
    )
    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaRHP, {
            produto: "OLeo oleoso ",
            setor: 578,
            quantidade: 74,
            valor: "R$ 9,01"
        })
    )
    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaRHP, {
            produto: "Sabão Nete",
            setor: 38,
            quantidade: 54,
            valor: "R$ 0,11"
        })
    )
    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserRHP, {
            usuario: "Matheus",
            privilegio :"Administrador"           
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserRHP, {
            usuario: "Ricardo",
            privilegio :"Administrador"            
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserRHP, {
            usuario: "Funcionario",
            privilegio :"usuario"            
        })
    )

    console.log("Express server Iniciou em  3000. abra  http://localhost:3000/SistemaRHP  ou http://localhost:3000/UserRHP para gerenciar o usuario")

}).catch(error => console.log(error))
