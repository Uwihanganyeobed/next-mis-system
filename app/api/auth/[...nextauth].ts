'use client'
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Add other providers here
  ],
  // Add any additional configuration options here
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // Expose both GET and POST methods
