/* eslint-disable @typescript-eslint/no-var-requires */
import { generateApiKey } from 'generate-api-key'
const fs = require('fs')
const key = 'APP_KEY=' + generateApiKey({ method: 'uuidv4' })

const data = fs.readFileSync('.env', 'utf8')
fs.writeFileSync('.env', data.replace(/APP_KEY?=.*/, key))
