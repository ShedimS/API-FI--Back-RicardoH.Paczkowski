import { NextFunction, Request, Response } from "express";
import { SistemaRHP } from "../entity/SistemaRHP";
import { UserRHP } from "../entity/UserRHP";
import { AppDataSource } from "../data-source";

//sistema de controle

export class SistemaRHPController {  
  private SistemaRHPRepository = AppDataSource.getRepository(SistemaRHP);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.SistemaRHPRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
  
 
    const id = request.params
    const user = await AppDataSource.getRepository(SistemaRHP).findOneBy(id)
    return response.json (user)    
}

  async save(request: Request, response: Response, next: NextFunction) {
    return this.SistemaRHPRepository.save(request.body);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const id = request.params
    const user = await AppDataSource.getRepository(SistemaRHP).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(SistemaRHP).findOneBy(id)
        response.json(userUpdated)
    }
} 
  
async remove(request: Request, response: Response, next: NextFunction) {

    const produto = request.params
        const user = await AppDataSource.getRepository(SistemaRHP).delete(produto)
        if(user.affected ==1){
            const userUpdated = await AppDataSource.getRepository(SistemaRHP).findOneBy(produto)
            response.json(userUpdated)
            }}
            
}

// Controle de usuarios
export class UserRHPController {
  private UserRHPRepository = AppDataSource.getRepository(UserRHP);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.UserRHPRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
  
 
    const cod = request.params
    const user = await AppDataSource.getRepository(UserRHP).findOneBy(cod)
    return response.json (user)    
}
 async save(request: Request, response: Response, next: NextFunction) { 

 
    const user = await AppDataSource.getRepository(UserRHP).save(request.body)
return response.json(user)
}



  async update(request: Request, response: Response, next: NextFunction) {
    const cod = request.params
    const user = await AppDataSource.getRepository(UserRHP).update(cod,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserRHP).findOneBy(cod)
        response.json(userUpdated)
    }
}
async remove(request: Request, response: Response, next: NextFunction) {

const usuario = request.params
    const user = await AppDataSource.getRepository(UserRHP).delete(usuario)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserRHP).findOneBy(usuario)
        response.json(userUpdated) 
           

    
    }
  
}


  



}

