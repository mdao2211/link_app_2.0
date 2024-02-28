import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Token from "next-auth";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "process.env.GOOGLE_CLIENT_ID",
      clientSecret: "process.env.GOOGLE_CLIENT_SECRET",
    }),
    GitHubProvider({ 
        clientId: "process.env.GITHUB_CLIENT_ID", 
        clientSecret: "process.env.GITHUB_CLIENT_SECRET", 
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: { token: typeof Token & { jwt: string } | null; user: { jwt: string } | null }) => {
      // user is only available the first time a user signs in authorized
      if (user) {
        return {
          ...token,
          jwt: user.jwt,
        };
      }
      return token;
    },
    session: async ({ session, token }: { session: { jwt?: string }; token: typeof Token & { jwt: string } | null }) => {
      if (token) {
        session.jwt = token.jwt;
      }
      return session;
    },
  },
};
