import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";
import db from "./db";

const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "xyz@dot.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.log("Not Inputs");
            return null;
          }

          const existingUser = await db.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!existingUser) {
            console.log("No user found");
            return;
          }

          const passwordMatch = await compare(
            credentials.password,
            existingUser.hashedPassword
          );

          if (!passwordMatch) {
            console.log("Password incorrect");
            return null;
          }
          const user = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
          };

          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};

export { authOptions };
