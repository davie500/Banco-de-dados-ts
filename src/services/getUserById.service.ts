import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Usuarios } from "../entities/usuarios.entitie"
import { AppError } from "../errors"
import { returnUserSchema } from "../schemas/usuarios.schemas"

export const getUserByIdService = async (userId:number)=>{

const usersRepository:Repository<Usuarios>=AppDataSource.getRepository(Usuarios)
const findUser = await usersRepository.findOne({
    where: {
        id: userId
    }
})
if(!findUser){
    throw new AppError("not found",404)
}
const user = returnUserSchema.parse(findUser)
return user
}