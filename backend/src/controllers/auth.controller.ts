import { createUser } from "@/services/auth.service";
import { Request, Response } from "express"

export async function register(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body
        const user = await createUser(name, email, password);


        return res.status(201).json({ user })

    } catch (err: any) {
        if (err.message === 'EMAIL_IN_USE') {
            return res.status(409).json({ message: 'Não foi possivel criar uma conta' })
        }

        throw err;
    }
}