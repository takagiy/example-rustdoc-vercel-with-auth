import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

if (!process.env.AUTH0_CLIENT_ID) {
  throw new Error("AUTH0_CLIENT_ID is not set");
}
if (!process.env.AUTH0_CLIENT_SECRET) {
  throw new Error("AUTH0_CLIENT_SECRET is not set");
}
if (!process.env.AUTH0_ISSUER) {
  throw new Error("AUTH0_ISSUER is not set");
}

const handler = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      return true;
    },
  },
});

export { handler as GET, handler as POST };
