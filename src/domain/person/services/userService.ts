import { Request } from "express";
import { UserRepository } from "../repositories/userRepository"

const userRepository = new UserRepository()
export class UserService {
   	
	async getItem(request: Request) {
		const { id } = request.params
		const where = {
			id: parseInt(id)
		}

		return userRepository.getItem(where)
    }

	async create(request: Request){
    	const { name , email } = request.body
		const data = {
			name, 
			email
		}

		return userRepository.create(data)
   	}

}