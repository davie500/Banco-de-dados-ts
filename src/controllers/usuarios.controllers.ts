import { Request, Response } from "express"
import { createPostService } from "../services/createUser.service"
import { getAllUsersService } from "../services/getAllUsers.service"
import { ReturnUser } from "../schemas/usuarios.schemas"
import { getUserByIdService } from "../services/getUserById.service"

export const createUserController = async(req:Request,res:Response):Promise<any> =>{
    const userData = req.body
    const user:ReturnUser = await createPostService(userData)
    return  res.status(201).json(user)
    
}
export const getAllUsersController=async(req:Request,res:Response):Promise<any>=>{
    const users = await getAllUsersService()
    return res.status(200).json(users)
}
export const UserIdController = async(req:Request,res:Response):Promise<any>=>{
    const user = await getUserByIdService(parseInt(req.params.id))
return res.status(200).json(user)
}