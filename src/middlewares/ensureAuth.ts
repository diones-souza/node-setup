import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization
  const key = String(process.env.APP_KEY)

  if (!authToken) {
    return response.status(401).json({
      message: 'Token is missing'
    })
  }

  const [, token] = authToken.split(' ')

  try {
    verify(token, key)
    return next()
  } catch (error) {
    return response.status(401).json({
      message: 'Token invalid'
    })
  }
}
