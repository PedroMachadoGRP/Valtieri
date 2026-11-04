import "dotenv/config"
import {z} from "zod"

const schema = z.object({
    NODE_ENV:z.enum(["development","test","production"]).default("development"),
    PORT:z.coerce.number().default(3333),
    DATABASE_URL:z.url(),
    UPSTASH_REDIS_REST_URL:z.url().optional(),
    UPSTASH_REDIS_REST_TOKEN:z.string().optional(),
    RESEND_API_KEY:z.string().optional(),
    FRONTEND_URL:z.url().default("http:localhost:3000"),
});

export const env = schema.parse(process.env)