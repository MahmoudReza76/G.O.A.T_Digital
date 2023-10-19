import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);
        if (!credentials.email || !credentials.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) {
          return null;
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!passwordMatch) {
          return null;
        }
        return {
          id: user.id + "",
          email: user.email,
          password: user.password,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  database: process.env.DATABASE_URL,
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    session: async (session, user) => {
      process.env.NEXTAUTH_URL = "https://g-o-a-t-digital.vercel.app/register";
      return session;
    },
  },
};

export default NextAuth(authOptions);
