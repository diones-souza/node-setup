import { UserRepository } from '../../person/repositories'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { stringify } from 'querystring'

const userRepository = new UserRepository()

interface Credential {
  username: string
  password: string
}

export class AuthService {
  async signIn({ username, password }: Credential) {
    const key = process.env.APP_KEY or

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

    const token = sign({}, key, {
      subject: user.id,
      expiresIn: '20s'
    })

    return { token }
  }
}
