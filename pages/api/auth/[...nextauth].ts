import NextAuth, { NextAuthOptions } from 'next-auth';
import Keycloak from "next-auth/providers/keycloak";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  providers: [
    Keycloak({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      issuer: process.env.ISSUER
    })
  ],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token }) {
      token.name = token.sub;
      token.userRole = 'admin';
      return token;
    },
  },
};

export default NextAuth(authOptions);
