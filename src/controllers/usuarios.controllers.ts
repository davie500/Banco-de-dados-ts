import { Request, Response } from "express"
import { createUserService } from "../services/createUser.service"
import { getAllUsersService } from "../services/getAllUsers.service"
import { ReturnUser } from "../schemas/usuarios.schemas"
import jwt from "jsonwebtoken"
import { removeUserService } from "../services/removeUser.service"

export const createUserController = async(req:Request,res:Response):Promise<any> =>{
    const userData = req.body
    const user:ReturnUser = await createUserService(userData)
    return  res.status(201).json(user)
    
}
export const getAllUsersController=async(req:Request,res:Response):Promise<any>=>{
    const users = await getAllUsersService()
  
    return res.status(200).json(users)
}
export const usuarioRetrieveController=async(req:Request,res:Response)=>{
    
    return res.status(200).json(req.user)
}
export const removeUserController = async(req:Request,res:Response):Promise<any>=>{
    const userId:string=req.params.id
    await removeUserService(userId)
    return res.status(204).send()
}