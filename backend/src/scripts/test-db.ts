import { prisma } from "@/lib/prisma";
import { error, log } from "node:console";

async function main() {
    const users = await prisma.user.count();
    console.log("Connected. Users in the datanase:", users);

}

main().catch((error) => {
    console.error("Connection failed:", error);
    process.exit(1)

}).finally(() => prisma.$disconnect)