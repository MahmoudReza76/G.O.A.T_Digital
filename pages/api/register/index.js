import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function POST(req, res) {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email is already taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user" });
  }
}
