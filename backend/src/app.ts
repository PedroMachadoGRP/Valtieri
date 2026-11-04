import express from "express"
import cors from "cors"
import helmet from "helmet"
import { env } from "./config/env"
import routes from "./routes"
import { errorHandler } from "./middleware/errorHandler"


export const app = express()

app.use(helmet())
app.use(cors({origin:env.FRONTEND_URL, credentials:true}))
app.use(express.json())

app.get("/health", (_req,res) => res.json({
    status:"ok"
}))

app.use("/api",routes);
app.use(errorHandler)