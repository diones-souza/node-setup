import moment from 'moment'
import { RefreshTokenRepository } from '../repositories'

const refreshTokenRepository = new RefreshTokenRepository()

export class RefreshTokenProvider {
  async execute(userId: string) {
    const expiresIn = moment().add(60, 'second').unix()

    const where = {
      userId
    }
    const data = {
      userId,
      expiresIn
    }

    const existRefresToken = await refreshTokenRepository.getItem(where)

    if (existRefresToken) {
      return await refreshTokenRepository.update(where, data)
    } else {
      return await refreshTokenRepository.create(data)
    }
  }
}
