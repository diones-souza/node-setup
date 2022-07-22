import { Request, Response } from "express"
import { prismaClient } from "../../../../database/prismaClient"
import { validationResult } from 'express-validator'

export class UserController {
    async create(request: Request, response: Response){
        const { name , email } = request.body

        const user = await prismaClient.user.create({
            data:{
                name,
                email
            }
        })
        
        return response.json(user)
    }
    
    async getItem(request: Request, response: Response) {
        const erros = validationResult(request)
        if(!erros.isEmpty()){
            return response.status(400).json({erros:erros.array()})
        }

        const { id } = request.params

        const users = await prismaClient.user.findFirst({
            where:{
                id: parseInt(id)
            }
        })

        return response.json(users)
    }
}