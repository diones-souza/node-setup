import { prismaClient } from '../../../database/prismaClient'

export class RefreshTokenRepository {
  async getItem(where: object) {
    return await prismaClient.refreshToken.findFirst({
      where
    })
  }

  async create(data: any) {
    return await prismaClient.refreshToken.create({
      data
    })
  }

  async update(where: object, data: any) {
    return await prismaClient.refreshToken.update({
      where,
      data
    })
  }
}
