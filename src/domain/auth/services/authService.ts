import { UserRepository } from '../../person/repositories'

const userRepository = new UserRepository()

interface IRequest {
  username: string
  password: string
}

export class AuthService {
  async signIn({ username, password }: IRequest) {
    const where = {
      username
    }

    const user = await userRepository.getItem(where)

    if (!user) {
      throw new Error('User or password incorrect!')
    }

    return {}
  }
}
