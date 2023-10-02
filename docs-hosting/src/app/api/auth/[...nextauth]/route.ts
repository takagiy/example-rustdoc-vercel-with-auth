import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

if (!process.env.GITHUB_CLIENT_ID) {
  throw new Error("GITHUB_CLIENT_ID is not set");
}
if (!process.env.GITHUB_CLIENT_SECRET) {
  throw new Error("GITHUB_CLIENT_SECRET is not set");
}

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      console.log("signIn", { user, account, profile, email, credentials });
      return true;
    },
  },
});

export { handler as GET, handler as POST };
