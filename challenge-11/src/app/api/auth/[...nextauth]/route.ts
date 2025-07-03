import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";

// Extend the built-in session and user types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      phone?: string | null;
      address?: string | null;
    };
  }
  
  // Extend the built-in User type
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    phone?: string | null;
    addresses?: Array<{
      id: string;
      street: string;
      city: string;
      ward: string;
      isDefault: boolean;
    }> | null;
  }
}

// Extend the built-in JWT types
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    phone?: string | null;
    addresses?: Array<{
      id: string;
      street: string;
      city: string;
      ward: string;
      isDefault: boolean;
    }> | null;
  }
}

export const authOptions: NextAuthOptions = {
  // ... rest of your configuration remains the same
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
          include: {
            addresses: true
          }
        });
        
        if (user) {
          // Return only the fields we need in the session
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            addresses: user.addresses.map(addr => ({
              id: addr.id,
              street: addr.street,
              city: addr.city,
              ward: addr.ward,
              isDefault: addr.isDefault
            }))
          };
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.phone = user.phone;
        // Include the user's addresses in the token
        if (user.addresses) {
          token.addresses = user.addresses;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.phone = token.phone as string;
        // Add addresses to the session user
        if (token.addresses) {
          (session.user as any).addresses = token.addresses;
        }
      }
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };