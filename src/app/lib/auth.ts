import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import prisma from "./db";

export const { handlers,signIn,signOut,auth } = NextAuth({
    providers: [Github,Google],
    adapter:   PrismaAdapter(prisma)
});