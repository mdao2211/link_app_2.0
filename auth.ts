import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { skipCSRFCheck } from "@auth/core";
import type { NextAuthConfig } from "next-auth";
import { cookies } from "next/headers";

export const config = {
  skipCSRFCheck,
  providers: [
    Credentials({
      // name: "credentials",
      credentials: {
        token: {},
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        console.log("Token:", credentials.token); // Log token to console

        try {
          cookies().set({
            name: "serverToken",
            value: credentials.token as string,
            httpOnly: true,
            path: "/",
          });

          const rawRes = await fetch("http://localhost:8080/user/me", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${credentials.token}`,
            },
          });
          console.log(rawRes, "rawRes.json()");
          if (!rawRes.ok) {
            console.log(await rawRes.json());
            return null;
          }
          const user = await rawRes.json();

          return { ...user, token: credentials.token };
        } catch (error) {
          console.log("🚀 ~ authorize ~ error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/auth/user_page");
      const isOnProjectPage = nextUrl.pathname.startsWith("/auth/project_page");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isOnProjectPage && isLoggedIn) {
        return true;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/auth/user_page", nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
