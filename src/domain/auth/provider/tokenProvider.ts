import { sign } from 'jsonwebtoken'

export class TokenProvider {
  async execute(userId: string) {
    const key = String(process.env.APP_KEY)

    const token = sign({}, key, {
      subject: userId,
      expiresIn: '20s' // 2 hours
    })

    return token
  }
}
