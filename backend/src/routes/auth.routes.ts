import { register } from "@/controllers/auth.controller";
import { validate } from "@/middleware/validate";
import { registerSchema } from "@/schemas/createUser.schema";
import { Router } from "express";

export const authRoutes = Router();

authRoutes.post("/register", validate(registerSchema),register)