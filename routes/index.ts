import express from 'express'
const fs = require("fs").promises

export class Routes{
    async handle(){
        const app = express()
        app.use(express.json())

        const routes = await fs.readdir("./src/domain")
        routes.forEach((item: any) => {
            const { router } = require(`../src/domain/${item}/http/routes`)
            app.use(router)
        });

        return app
    }
}