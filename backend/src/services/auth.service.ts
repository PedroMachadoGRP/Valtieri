import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma";

export async function createUser(name: string, email: string, password: string) {

    const exist = await prisma.user.findUnique({ where: { email } })
    if (exist) throw new Error("EMAIL_IN_USE")

    const salt = process.env.BCRYPT_SALT_ROUNDS;

    const passwordHash = await bcrypt.hash(password, Number(salt));

    const user = await prisma.user.create({
        data: { name, email, password: passwordHash },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true
        }
    });

    return user
}