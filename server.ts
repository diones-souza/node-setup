import { Routes } from "./routes"

async function main() {
    const modules = new Routes()
    const app = await modules.handle()
    const port = process.env.APP_PORT
    console.log(process.env.DATABASE_URL)

    app.listen(port, () => console.log(`Server is runnig on Port ${port}`))
}

main()