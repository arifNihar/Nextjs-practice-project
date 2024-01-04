import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./db";
import { compare } from "bcrypt";

const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "iwt",
  },
  callbacks: {
    async session({session, user, token}) {
        return session;
    }
    async jwt({token, user, account, profile, isNewUser}) {
        return token;
    },
  },
};

export { authOptions };