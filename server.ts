import { Routes } from "./routes"

async function main() {
    const modules = new Routes()
    const app = await modules.handle()

    app.listen(3333, () => console.log("Server is runnig on Port 3333"))
}

main()