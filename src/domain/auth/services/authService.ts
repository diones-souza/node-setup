import { UserRepository } from '../../person/repositories'
import { TokenProvider, RefreshTokenProvider } from '../provider'
import { RefreshTokenRepository } from '../repositories'
import { compare } from 'bcryptjs'
import moment from 'moment'

const userRepository = new UserRepository()
const refreshTokenRepository = new RefreshTokenRepository()

interface Credential {
  username: string
  password: string
}

export class AuthService {
  async signIn({ username, password }: Credential) {
    const where = {
      username
    }

    const user = await userRepository.getItem(where)

    if (!user) {
      throw new Error('User or password incorrect!')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('User or password incorrect!')
    }

    const tokenProvider = new TokenProvider()
    const token = await tokenProvider.execute(user.id)

    const refreshTokenProvider = new RefreshTokenProvider()
    const refreshToken = await refreshTokenProvider.execute(user.id)

    return { token, refreshToken }
  }

  async refreshToken(id: string) {
    const where = {
      id
    }

    const refreshToken = await refreshTokenRepository.getItem(where)

    if (!refreshToken) {
      throw new Error('Refresh token invalid')
    }

    const refreshTokenExpired = moment().unix() > refreshToken.expiresIn

    if (refreshTokenExpired) {
      throw new Error('Refresh token expired')
    }

    const tokenProvider = new TokenProvider()
    const token = await tokenProvider.execute(refreshToken.id)

    return { token }
  }
}
