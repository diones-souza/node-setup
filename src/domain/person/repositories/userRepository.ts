import { prismaClient } from '../../../database/prismaClient'

export class UserRepository {
  async getItems(where: object) {
    return await prismaClient.user.findMany({
      where
    })
  }

  async getItem(where: object) {
    return await prismaClient.user.findFirst({
      where
    })
  }

  async create(data: any) {
    return await prismaClient.user.create({
      data
    })
  }
}
