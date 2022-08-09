import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { Routes } from './routes'
import corsOptions from './config/cors'

declare let require: any

const cors = require('cors')

async function main() {
  const app = express()
  const modules = new Routes()

  app.use(express.json())
  app.use(cors(corsOptions))

  await modules.handle(app)

  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      return response.json({
        status: 'ERROR',
        message: error.message
      })
    }
  )

  const port = process.env.APP_PORT

  app.listen(port, () => console.log(`Server is runnig on Port ${port}`))
}

main()
