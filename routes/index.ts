const fs = require('fs').promises

export class Routes {
  async handle (app: any) {
    const routes = await fs.readdir('./src/domain')
    routes.forEach((item: any) => {
      const { router } = require(`../src/domain/${item}/http/routes`)
      app.use(router)
    })
  }
}
