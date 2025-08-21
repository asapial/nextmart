import { collectionList, dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// ✅ Auth options
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Please enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Credentials received:", credentials);

        // Connect to DB and find user
        const user = await (
          await dbConnect(collectionList.userCollection)
        ).findOne({ email: credentials.email });

        console.log(user);
        if (!user) {
          return null; // Invalid email
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          return null; // Invalid password
        }

        // ✅ Return a plain object containing user info
        return {
          id: user._id.toString(), // MongoDB _id as string
          name: user.fullName,
          email: user.email,
          image: user.image,

        };
      },
    }),
  ],
  pages: {
    signIn: "/authentication/signin", // custom signin page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // Add user info to JWT token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    // Add user info to session object
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// ✅ Named exports for App Router
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
